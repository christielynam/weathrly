import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from '../lib/WeatherCard';

describe('WeatherCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<WeatherCard />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
