import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: [] };
  }

  render() {
    return (
      <div>
        <Header />
        <CurrentWeather />
        {/* <Welcome /> */}
      </div>
    );
  }

}
