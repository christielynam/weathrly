import React from 'react';
import './DayCard.css';

const DayCard = day => {
  return (
    <div className="card">
      <img className="cardImg" src={day.img} />
      <p className="dayHigh" >{day.high}&#176;F</p>
      <p className="dayLow" >{day.low}&#176;F</p>
      <p className="day">{day.day}</p>
    </div>
  );
}

export default DayCard
