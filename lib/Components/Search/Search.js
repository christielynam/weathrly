import React from 'react';
import './Search.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
    console.log(this.state.input)
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
      </div>
    );
  }

}
