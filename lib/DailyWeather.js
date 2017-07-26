import React from 'react';
import WeatherCard from './WeatherCard';
import './DailyWeather.css';

export default class DailyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="dailyContainer">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
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
