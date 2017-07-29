import React from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';
import Header from '../Header/Header';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import HourlyWeather from '../HourlyWeather/HourlyWeather';
import HourCard from '../HourCard/HourCard';
import DailyWeather from '../DailyWeather/DailyWeather';
import DayCard from '../DayCard/DayCard';
import Location from '../Location';
import key from '../../key';


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
    const { state, city } = this.state.currentLocation;

    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/hourly/q/${state}/${city}.json`)
    .then(data => data.json())
    .then(data => {
      const locationInfo = new Location(data);

      this.setState({
        weatherData: locationInfo,
      });
    });
  }

  updateLocalStorage() {
    localStorage.setItem('city', JSON.stringify(this.state.currentLocation.city));
  }

  getFromLocal() {
    const city = localStorage.getItem('city');

    if (city) {
      this.setState({ currentLocation: JSON.parse(city) });
    }
  }

  render() {
    const hourCards = (this.state.weatherData.hourlyForecast || []).map((hour, index) => {
      if (index <= 6) {
        return <HourCard img={hour.icon_url} temp={hour.temp.english} time={hour.FCTTIME.civil} key={hour.FCTTIME.hour} />;
      }
    });

    const dayCards = (this.state.weatherData.dailyForecast || []).map(day => {
      return <DayCard img={day.icon_url} high={day.high.fahrenheit} low={day.low.fahrenheit} day={day.date.weekday} key={day.period} />
    }
  );


    return (
      <div>
        <Header />
        <CurrentWeather weather={this.state.weatherData}/>

        <HourlyWeather>
          { this.state.weatherData.hourlyForecast && hourCards }
        </HourlyWeather>

        <DailyWeather>
        { this.state.weatherData.dailyForecast && dayCards }
        </DailyWeather>

        {/*
          <Welcome />
        */}

      </div>
    );
  }

}
