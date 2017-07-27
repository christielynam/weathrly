import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => {

  return (
    <div className="container">
      <h3 className="quote">When it rains, look for rainbows. When it's dark, look for stars.</h3>
      <h3 className="city">
        {weather.location}
      </h3>
      <h3 className="date">Thursday, July 26</h3>
      <div className="mainContent">
        <div className="todaysWeather">
          <p className="temp">{weather.currentTemp}<span className="degrees">&#8457;</span></p>
          <p className="currentCondition">{weather.condition}</p>
        </div>
        <img className="image" src="assets/sun (1).svg" />
        <div className="tempRange">
          <p className="high">Today's High: {weather.todayHigh}<span className="degrees">&#8457;</span></p>
          <p className="low">Today's Low: {weather.todayLow}<span className="degrees">&#8457;</span></p>
        </div>
      </div>
      <p className="dailyReport">Today's Forecast: {weather.dailyReport}</p>
    </div>
  );
};


export default CurrentWeather
