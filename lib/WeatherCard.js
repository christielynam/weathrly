import React from 'react';
import './WeatherCard.css';

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.image = props.image;
    this.high = props.high;
    this.low = props.low;
    this.current = props.current;
    this.day = props.day;
    this.time = props.time;
  }

  render() {
    return (
      <div className="card">
        <img className="cardImg" src="assets/sun (1).svg" />
        <h3 className="cardTemp">98</h3>
        <p className="time">3 pm</p>
      </div>
    );
  }
}
