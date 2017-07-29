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
      location: '',
    }
  }

  componentDidMount() {
    this.getFromLocal();
    if(this.state.location){
      this.setLocation();
      this.getWeather();
    }
  }

  setLocation(passedLocation) {
    this.setState({
      location: passedLocation,
    }, this.getWeather)
  }


  getWeather() {
    fetch(`http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/hourly/q/${this.state.location}.json`)
    .then(data => data.json())
    .then(data => {
      const locationInfo = new Location(data);

      this.setState({
        weatherData: locationInfo,
      });
    });
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('location', this.state.location);
  }

  getFromLocal() {
    const location = localStorage.getItem('location');
      this.setState({ location: location }, this.getWeather);
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

        {
          (!this.state.location) && <Welcome setLocation={this.setLocation.bind(this)} />
        };

        {
          (this.state.location) &&
          <div>
            <Header setLocation={this.setLocation.bind(this)} />

            <CurrentWeather weather={this.state.weatherData} />

            <HourlyWeather>
              { this.state.weatherData.hourlyForecast && hourCards }
            </HourlyWeather>

            <DailyWeather>
              { this.state.weatherData.dailyForecast && dayCards }
            </DailyWeather>
          </div>

        }
      </div>
    );

  }
}
