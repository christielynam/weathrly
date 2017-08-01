import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/Components/CurrentWeather/CurrentWeather';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js'
import Location from '../lib/Components/Location'


describe('CurrentWeather', () => {
  let wrapper;
  let location = new Location(weatherData)
  console.log();

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather weather={location} />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it.only('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display the saved city', () => {
    // expect(wrapper.props().children.find(h3.city)).toEqual('Birmingham, AL')
  })


})
