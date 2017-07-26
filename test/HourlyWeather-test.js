import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyWeather from '../lib/HourlyWeather';

describe('HourlyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
