import React from 'react';
import WeatherCard from './WeatherCard';
import './HourlyWeather.css';

const HourlyWeather = hours => {
  return (
    <div className="hourlyContainer">
      <h2 className="hourlyForecast">Hourly Forecast</h2>
      <div className="hourlyCardContainer">
        <div> {hours.children} </div>
      </div>
    </div>
  );
}

export default HourlyWeather
