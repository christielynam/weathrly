import React from 'react';
import './Search.css'

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: '',
    });
  }

  render() {
    return (
      <div className="search-container">
        <input placeholder="Find weather by zip code or city, state" />
      </div>
    );
  }

}
