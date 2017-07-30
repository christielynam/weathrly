import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from '../lib/Components/DayCard/DayCard';
import localStorageMock from '../__mock__/localStorageMock.js';

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
