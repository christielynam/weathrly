import React from 'react';
import './DayCard.css';

const DayCard = day => {
  return (
    <div className="card">
      <img className="cardImg" src={`assets/${day.img}.svg`} />
      <p className="dayHigh" >H: {day.high}&#176;F</p>
      <p className="dayLow" >L: {day.low}&#176;F</p>
      <p className="day">{day.day}</p>
    </div>
  );
}

export default DayCard
