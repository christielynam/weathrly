import React from 'react';
import './CurrentWeather.css';

export default class CurrentWeather extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: [] };
  }

  componentDidMount() {
    fetch('http://api.wunderground.com/api/f18d3686ca97af45/conditions/q/AL/Birmingham.json')
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="dateCity">
          <h3 className="date">Tuesday, July 25</h3>
          <h3 className="city">Birmingham, AL</h3>
        </div>
        <div className="now">
          <p className="temp">95<span className="degrees">&#8457;</span></p>
          <img className="image" src="assets/sun (1).svg" />
          <p className="currentCondition">Ice cream weather</p>
        </div>
        <div className="today">
          <div className="tempRange">
            <p className="hi">99<span className="degrees">&#8457;</span></p>
            <p className="low">64<span className="degrees">&#8457;</span></p>
          </div>
          <div>
            <p className="dailyCondition">Generally sunny despite a few afternoon clouds. A stray shower of thunderstorm is possible overnight.</p>
          </div>
        </div>
      </div>
    );
  }
}
