import React from 'react';
import './CurrentWeather.css';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return(
      <div className="foo">
        <div className="dateCity">
          <h3 className="date">July 24, 2017</h3>
          <h3 className="city">Birmingham, AL</h3>
        </div>
        <div className="now">
          <p className="temp">95</p>
          <p className="image">Image</p>
          <p className="currentCondition">So hot I saw a squirrel putting suntan oil on his nuts</p>
        </div>
      </div>
    )

  }

}
