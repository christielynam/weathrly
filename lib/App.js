import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import HourlyWeather from './HourlyWeather';
import HourCard from './HourCard';
import DailyWeather from './DailyWeather';
import DayCard from './DayCard';
import Location from './Location';
import key from './key';

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

  render() {
    const hourCards = (this.state.weatherData.hourlyForecast || []).map((hour, index) => {
      if (index <= 6){
        return <HourCard img={hour.icon_url} temp={hour.temp.english} time={hour.FCTTIME.civil} key={hour.FCTTIME.hour} />
      }
    });

    const dayCards = (this.state.weatherData.dailyForecast || []).map(day => {
      return <DayCard img={day.icon_url} high={day.high.fahrenheit} low={day.low.fahrenheit} day={day.date.weekday} key={day.period} />
    }
  );


    return (
      <div>
        <Welcome />
        {/* <Header />
        <CurrentWeather weather={this.state.weatherData}/>

        <HourlyWeather>
          { this.state.weatherData.hourlyForecast && hourCards }
        </HourlyWeather>

        <DailyWeather>
        { this.state.weatherData.dailyForecast && dayCards }
        </DailyWeather> */}

        {/*

        */}

      </div>
    );
  }

}
