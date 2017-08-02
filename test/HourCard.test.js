import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/Components/HourCard/HourCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js';
import Location from '../lib/Components/Location';

describe('HourCard', () => {
  let wrapper;
  const location = new Location(weatherData);
  const hour = location.hourlyForecast[0];

  beforeEach(() => {
    wrapper = shallow(<HourCard
      img={weatherData.hour.icon}
      temp={hour.temp}
      time={hour.time} />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should display a condition icon', () => {
    expect(wrapper.node.props.children[0].props.src).toEqual('');
  });

  it.skip('should display a temp', () => {
    expect(wrapper.node.props.children[1].props.children).toEqual('86.1°F');
  });

  it.skip('should display a time', () => {
    expect(wrapper.node.props.children[3].props.children).toEqual('');
  });
});
