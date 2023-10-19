import React, { Component, ChangeEvent } from 'react';

interface SearchBoxProps {
  searchEngines: SearchEngine[];
}

interface SearchBoxState {
  selectedEngine: string;
  searchTerm: string;
}

interface SearchEngine {
  name: string;
  url: string;
}

class SearchBox extends Component<SearchBoxProps, SearchBoxState> {
  constructor(props: SearchBoxProps) {
    super(props);
    this.state = {
      selectedEngine: props.searchEngines[0].url, // Initialize with the URL of the first search engine
      searchTerm: '',
    };
  }

  handleEngineChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedEngine = this.props.searchEngines.find((engine) => engine.name === event.target.value);
    if (selectedEngine) {
      this.setState({ selectedEngine: selectedEngine.url });
    }
  };

  handleSearch = () => {
    const { selectedEngine, searchTerm } = this.state;
    if (searchTerm) {
      const searchURL = `${selectedEngine}${encodeURIComponent(searchTerm)}`;
      window.location.href = searchURL;
    }
  };

  handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search-box">
        <select onChange={this.handleEngineChange} value={this.props.searchEngines.find((engine) => engine.url === this.state.selectedEngine)?.name}>
          {this.props.searchEngines.map((engine) => (
            <option key={engine.name} value={engine.name}>
              {engine.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Enter your search term"
          value={this.state.searchTerm}
          onChange={this.handleSearchTermChange}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchBox;
