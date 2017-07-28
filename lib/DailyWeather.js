import React from 'react';
import DayCard from './DayCard';
import './DailyWeather.css';

const DailyWeather = days => {
  return (
    <div className="dailyContainer">
      <h2 className="dailyForecast">10-Day Forecast</h2>
      <div className="dailyCardContainer">
        <div> {days.children} </div>
      </div>
    </div>
  );
}

export default DailyWeather
