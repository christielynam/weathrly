import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/Components/CurrentWeather/CurrentWeather';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js'
import Location from '../lib/Components/Location'


describe('CurrentWeather', () => {
  let wrapper;
  let location = new Location(weatherData)

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather weather={location} />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display the saved city', () => {
    expect(location.location).toEqual('Birmingham, AL')
  })

  it('should display the day', () => {
    expect(location.day).toEqual('Tuesday')
  })

  it('should display the month', () => {
    expect(location.month).toEqual('August')
  })

  it('should display the date', () => {
    expect(location.date).toEqual(1)
  })

  it('should display the current temperature', () => {
    expect(location.currentTemp).toEqual(88)
  })

  it('should display the current condition', () => {
    expect(location.condition).toEqual('Partly Cloudy')
  })

  it('should display an icon that represents the condition', () => {
    expect(location.icon).toEqual('mostlycloudy')
  })

  it("should display today's expected high", () => {
    expect(weatherData.forecast.simpleforecast.forecastday[0].high.fahrenheit).toEqual(88)
  })

  it("should display today's expected low", () => {
    expect(weatherData.forecast.simpleforecast.forecastday[0].low.fahrenheit).toEqual(72)
  })

  it('should display a daily report', () => {
    expect(location.dailyReport).toEqual('Mainly cloudy. Lows overnight in the low 70s')
  })c
})
