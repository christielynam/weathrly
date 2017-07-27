import React from 'react';
import './WeatherCard.css';

export default class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { hourlyData: [] };
    // this.image = props.icon_url;
    // this.high = props.high;
    // this.low = props.low;
    // this.current = props.temp.english;
    // this.day = props.day;
    // this.time = props.FCTTIME.civil;
  }

  // componentDidMount() {
  //   fetch(`http://api.wunderground.com/api/${key}/conditions/forecast/forecast10day/hourly/q/AL/Birmingham.json`)
  //   .then(data => data.json())
  //   .then(data => {
  //     const locationInfo = new Location(data);
  //
  //     this.setState({
  //       hourlyData: locationInfo,
  //     });
  //   });
  // }


  // createCard(this.state.hourlyData) {
  //
  //   let card = new WeatherCard(forecast)
  // }

  render() {

    // const { image, current, time } = this.state.hourlyData[0];
    return (
      <div className="card">
        <img className="cardImg" src="assets/sun (1).svg" />
        <h3 className="cardTemp" >98</h3>
        <p className="time" >3 pm</p>
      </div>
    );
  }
}
