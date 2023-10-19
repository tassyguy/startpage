import React, { Component } from 'react';

interface TimeState {
  currentTime: string;
}

class Time extends Component<{}, TimeState> {
  private intervalId: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime = () => {
    this.setState({
      currentTime: new Date().toLocaleTimeString(),
    });
  };

  render() {
    return (
      <div className={'time'}>
        <h1>{this.state.currentTime}</h1>
      </div>
    );
  }
}

export default Time;
