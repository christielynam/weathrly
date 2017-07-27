import React from 'react';
import './WeatherCard.css';

const WeatherCard = day => {
  return (
    <div className="card">
      <img className="cardImg" src={day.img} />
      <h3 className="cardTemp" >{day.temp}</h3>
      <p className="time" >{day.time}</p>
    </div>
  );
}

export default WeatherCard
