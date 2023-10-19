import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';

interface WeatherData {
    name: string;
    weather: {
        description: string;
    }[];
    main: {
        temp: number;
    };
}

interface WeatherProps { }

interface WeatherState {
    location: string;
    weather: WeatherData | null;
    loading: boolean;
}

class Weather extends Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = {
            location: 'Atlanta, GA',
            weather: null,
            loading: true,
        };
    }

    componentDidMount() {
        this.fetchWeather(this.state.location);

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                this.fetchLocationByCoordinates(latitude, longitude);
            });
        }
    }

    fetchWeather(location: string) {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const weatherEndpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        axios
            .get(weatherEndpoint)
            .then((response) => {
                this.setState({ weather: response.data, loading: false });
            })
            .catch((error) => {
                console.error('Error fetching weather data:', error);
                this.setState({ loading: false });
            });
    }

    fetchLocationByCoordinates(latitude: number, longitude: number) {
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const locationEndpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        axios
            .get(locationEndpoint)
            .then((response) => {
                this.setState({ location: response.data.name });
                this.fetchWeather(response.data.name);
            })
            .catch((error) => {
                console.error('Error fetching location data:', error);
            });
    }

    updateLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                this.fetchLocationByCoordinates(latitude, longitude);
            });
        }
    };

    render() {
        const { location, weather, loading } = this.state;

        return (
            <div className="search-box">
                <div className="location">
                    <h3>Current Location: {location}</h3>
                </div>
                {loading ? (
                    <p>Loading weather data...</p>
                ) : (
                    <div className="weather">
                        <p>Weather: {weather?.weather[0].description}</p>
                        <p>Temperature: {weather?.main.temp}°C</p>
                    </div>
                )}
                <button onClick={this.updateLocation}>Update Location</button>
            </div>
        );
    }
}

export default Weather;
