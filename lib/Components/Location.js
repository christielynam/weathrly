export default function Location(city) {
  this.location = city.current_observation.display_location.full;
  this.day = city.forecast.simpleforecast.forecastday[0].date.weekday;
  this.month = city.forecast.simpleforecast.forecastday[0].date.monthname;
  this.date = city.forecast.simpleforecast.forecastday[0].date.day;
  this.currentTemp = Math.round(city.current_observation.temp_f);
  this.condition = city.current_observation.weather;
  this.iconURL = city.current_observation.icon_url;
  this.todayHigh = city.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  this.todayLow = city.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  this.dailyReport = city.forecast.txt_forecast.forecastday[0].fcttext;
  this.hourlyForecast = city.hourly_forecast || [];
  this.dailyForecast = city.forecast.simpleforecast.forecastday || [];
}
