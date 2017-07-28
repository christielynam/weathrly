import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ weather }) => {

  return (
    <div className="container">
      <h3 className="quote">When it rains, look for rainbows. When its dark, look for stars.</h3>
      <h3 className="city">
        {weather.location}
      </h3>
      <h3 className="date">{weather.day}, {weather.month} {weather.date}</h3>
      <div className="mainContent">
        <div className="todaysWeather">
          <p className="temp">{weather.currentTemp}<span className="degrees">&#176;F</span></p>
          <p className="currentCondition">{weather.condition}</p>
        </div>
        <img className="image" src="assets/sun (1).svg" />
        <div className="tempRange">
          <p className="high">Todays High: {weather.todayHigh}<span className="degrees">&#176;F</span></p>
          <p className="low">Todays Low: {weather.todayLow}<span className="degrees">&#176;F</span></p>
        </div>
      </div>
      <p className="dailyReport">Todays Forecast: {weather.dailyReport}</p>
    </div>
  );
};


export default CurrentWeather
