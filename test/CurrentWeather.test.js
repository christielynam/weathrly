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
    expect(wrapper.find('.city').prop('children')).toEqual('Birmingham, AL')
  });

  it.skip('should display the day', () => {
    expect(wrapper.find('.date').prop('children')).toEqual('Tuesday August 1')
  });

  it.skip('should display the current temperature', () => {
    expect(wrapper.find('.temp').prop('children')).toEqual('88 °F')
  });

  it('should display the current condition', () => {
    expect(wrapper.find('.currentCondition').prop('children')).toEqual('Partly Cloudy')
  });

  it('should display an icon that represents the condition', () => {
    expect(wrapper.find('.weatherIcon').prop('src')).toEqual('assets/mostlycloudy.svg')
  });

  it("should display today's expected high", () => {
    expect(wrapper.find('p.high').prop('children').innerText).toEqual('88 degrees F')
  });

  it("should display today's expected low", () => {
    expect(wrapper.find('p.low').prop('children')).toEqual('72')
  });

  it('should display a daily report', () => {
    expect(wrapper.find('.dailyReport').prop('children')[0]).toEqual("Today's Forecast: ", "Mainly cloudy. Lows overnight in the low 70s.")
  });
})
