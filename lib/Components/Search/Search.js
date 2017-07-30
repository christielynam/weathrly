import React from 'react';
import './Search.css';
import cityList from '../../cityList';
import Trie from '../../Trie';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      suggestions: [],
    };
    this.trie = new Trie();
    this.trie.populate(cityList);
  }

  handleChange(e) {
    // const suggestions = this.trie.suggest(e.target.value);
    this.setState({
      input: e.target.value,
      // suggestions,
    });
  }

  getLocation(userInput) {
    let splitInput = userInput.split(', ');
    [splitInput[0], splitInput[1]] = [splitInput[1], splitInput[0]];
    splitInput = splitInput.join('/');
    splitInput = splitInput.replace(' ', '_');
    this.props.setLocation(splitInput);
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      this.getLocation(this.state.input);
    }
  }

  render() {
    return (
      <div className="search-container">
        <input
          onKeyDown={this.handleEnter.bind(this)}
          onChange={this.handleChange.bind(this)}
          className="searchInput"
          placeholder="Find weather by zip code or city, state" />
          <div className="suggestionContainer">
            <ul className="suggestions">
              {this.state.suggestions.map((city, index) => <li key={index}>{city}</li>)}
            </ul>
          </div>
      </div>
    );
  }
}
