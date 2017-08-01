import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyWeather from '../lib/Components/DailyWeather/DailyWeather';
import localStorageMock from '../__mock__/localStorageMock.js';

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

  it('should render the DayCard component', () => {
    expect(wrapper.find('DayCard').length).toEqual(1);
  });
});
