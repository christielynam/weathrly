import React from 'react';
import './CurrentWeather.css';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div className="container">
        <div className="dateCity">
          <h3 className="date">July 25, 2017</h3>
          <h3 className="city">Birmingham, AL</h3>
        </div>
        <div className="now">
          <p className="temp">95<span className="degrees">&#8457;</span></p>
          <img className="image" src="assets/sun (1).svg" />
          <p className="currentCondition">Ice cream weather</p>
        </div>
      </div>
    );
  }
}
