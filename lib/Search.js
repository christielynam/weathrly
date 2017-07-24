import React, { Component } from 'react';
import './Search.css'

export default class Search extends Component {

  render() {
    return (
      <div className="app">
        <input placeholder="Enter City or Zip Code" />
        <button type="submit">Search</button>
      </div>
    )
  }

}
