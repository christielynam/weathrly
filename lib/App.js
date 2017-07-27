import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weatherData: [] };
  }

  render() {
    return (
      <div>
        {/* <Welcome /> */}
        <Header />
        <CurrentWeather />
        <HourlyWeather />
        <DailyWeather />
      </div>
    );
  }

}
