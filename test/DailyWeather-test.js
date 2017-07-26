import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyWeather from '../lib/DailyWeather';

describe('DailyWeather', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyWeather />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
