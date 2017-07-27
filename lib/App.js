import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';
import WeatherCard from './WeatherCard';
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

      this.setState({
        weatherData: locationInfo,
      });
    });
  }

  render() {
    console.log(this.state.weatherData.hourlyForecast);



    const cards = (this.state.weatherData.hourlyForecast || []).map((day, index) => {
      if (index <= 6){
        console.log(day.icon_url)
        return <WeatherCard img={day.icon_url} temp={day.temp.english} time={day.FCTTIME.civil} />
      }
    })


    return (
      <div>
        {/* <Welcome /> */}
        <Header />
        <CurrentWeather weather={this.state.weatherData}/>
        <HourlyWeather>
          { this.state.weatherData.hourlyForecast && cards}
        </HourlyWeather>
        <DailyWeather />
      </div>
    );
  }

}
