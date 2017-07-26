import React from 'react';
import WeatherCard from './WeatherCard';
import './HourlyWeather.css';

export default class HourlyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hourlyContainer">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    );
  }
}
