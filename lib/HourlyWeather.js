import React from 'react';
import HourCard from './HourCard';
import './HourlyWeather.css';

const HourlyWeather = hours => {
  return (
    <div className="hourlyContainer">
      <h2 className="hourlyForecast">
        Hourly Forecast
      </h2>
      <div className="hourlyCardContainer"> { hours.children }
      </div>
    </div>
  );
}

export default HourlyWeather
