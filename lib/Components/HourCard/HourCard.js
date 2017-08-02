import React from 'react';
import './HourCard.css';

const HourCard = hour => {
  return (
    <div className="card">
      <img className="cardImg" src={`assets/${hour.img}.svg`} />
      <h3 className="cardTemp">{hour.temp}&#176;F</h3>
      <p className="time">{hour.time}</p>
    </div>
  );
};

export default HourCard;
