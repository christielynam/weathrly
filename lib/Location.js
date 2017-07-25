export default function Location(city) {
  this.location = city.current_observation.display_location.full;
  this.currentTemp = city.current_observation.temp_f;
  this.condition = city.current_observation.weather;
  this.todayHigh = city.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.todayLow = city.forecast.simpleforecast.forecastday[0].low.fahrenheit;
}
