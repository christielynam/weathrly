import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/Components/HourCard/HourCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js';
import Location from '../lib/Components/Location'

describe('HourCard', () => {
  let wrapper;
  let location = new Location(weatherData)

  beforeEach(() => {
    wrapper = shallow(<HourCard
      img={weatherData.hourly_forecast[0].icon}
      temp={weatherData.hourly_forecast[0].temp.english}
      time={weatherData.hourly_forecast[0].FCTTIME.civil}
      key={weatherData.hourly_forecast[0].FCTTIME.hour} />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a condition icon', () => {
    expect(wrapper.node.props.children[0].props.src).toEqual('assets/partlycloudy.svg');
  });

  it('should display a temp', () => {
    expect(wrapper.node.props.children[1].props.children).toEqual(["88", "°F"]);
  });

  it('should display a time', () => {
    expect(wrapper.node.props.children[2].props.children).toEqual('6:00 PM');
  });
});
