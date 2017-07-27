import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import Location from './Location';
import key from './key'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      currentLocation: {
        state: 'AL',
        city: 'Birmingham',
      } };
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather() {
    const { state, city } = this.state.currentLocation

    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/hourly/q/${state}/${city}.json`)
    .then(data => data.json())
    .then(data => {
      const locationInfo = new Location(data);
      console.log(locationInfo);

      this.setState({
        weatherData: locationInfo,
      });
    });
  }

  render() {
    return (
      <div>
        {/* <Welcome /> */}
        <Header />
        <CurrentWeather weather={this.state.weatherData}/>
        <HourlyWeather />
        <DailyWeather />
      </div>
    );
  }

}
