import React from 'react';
import key from './key.js';
import Location from './Location';
import './CurrentWeather.css';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: [] };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/hourly/q/AL/Birmingham.json`)
    .then(data => data.json())
    .then(data => {
      const locationInfo = new Location(data);
      // console.log(locationInfo);

      this.setState({
        weatherData: locationInfo,
      });
    });
  }

  render() {
    // console.log(this.state.weatherData.currentTemp);
    const { location, currentTemp, condition, todayHigh, todayLow, dailyReport } = this.state.weatherData;
    return (
      <div className="container">
        <h3 className="quote">A change in the weather is sufficient to recreate the world and ourselves</h3>
        <h3 className="city">
          {location}
        </h3>
        <div className="now">
          <p className="temp">{currentTemp}<span className="degrees">&#8457;</span></p>
          <img className="image" src="assets/sun (1).svg" />
          <p className="currentCondition">{condition}</p>
        </div>
        <div className="today">
          <div className="tempRange">
            <p className="hi">High: {todayHigh}<span className="degrees">&#8457;</span></p>
            <p className="low">Low: {todayLow}<span className="degrees">&#8457;</span></p>
          </div>
          <div>
            <p className="dailyCondition">Today: {dailyReport}</p>
          </div>
        </div>
      </div>
    );
  }
}
