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
        <h2 className="dailyForecast">10-Day Forecast</h2>
        <div className="dailyCardContainer">
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
      </div>
    );
  }
}
