export default function Location(city) {
  this.location = city.current_observation.display_location.full;
  this.currentTemp = city.current_observation.temp_f;
  this.condition = city.current_observation.weather;
  this.todayHigh = city.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.todayLow = city.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.dailyReport = city.forecast.txt_forecast.forecastday[0].fcttext;
  this.hourlyForecastTemp = city.hourly_forecast[0].temp.english;
}
