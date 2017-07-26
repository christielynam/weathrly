import React from 'react';
import WeatherCard from './WeatherCard';
import './HourlyWeather.css';
import Location from './Location';

export default class HourlyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="hourlyContainer">
        <h2 className="hourlyForecast">Hourly Forecast</h2>
        <div className="hourlyCardContainer">
          <WeatherCard nextHour={Location.hourlyForecast}/>
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
