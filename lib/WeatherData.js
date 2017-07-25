import React from 'react'
import key from './key.js'

export default class WeatherData extends React.Component {
  constructor() {
    super();
    this.state = { weatherData: [] };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${key}/conditions/q/AL/Birmingham.json`)
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }
