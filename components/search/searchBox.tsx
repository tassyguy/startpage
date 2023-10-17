import React, { Component } from 'react';

interface SearchEngine {
  name: string;
  url: string;
}

interface SearchBoxProps {
  searchEngines: SearchEngine[];
}

interface SearchBoxState {
  selectedEngine: SearchEngine;
  searchTerm: string;
}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);
    this.state = {
      selectedEngine: props.searchEngines[0],
      searchTerm: '',
    };
  }

  handleEngineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedEngine = this.props.searchEngines.find(
      (engine) => engine.name === event.target.value
    );
    if (selectedEngine) {
      this.setState({ selectedEngine });
    }
  };

  handleSearch = () => {
    const { selectedEngine, searchTerm } = this.state;
    if (searchTerm) {
      window.location.href = `${selectedEngine.url}${encodeURIComponent(searchTerm)}`;
    }
  };

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter your search term"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <select onChange={this.handleEngineChange} value={this.state.selectedEngine.name}>
          {this.props.searchEngines.map((engine) => (
            <option key={engine.name} value={engine.name}>
              {engine.name}
            </option>
          ))}
        </select>
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBox;
