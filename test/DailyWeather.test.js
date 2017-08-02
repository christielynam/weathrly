import React from 'react';
import { shallow, mount } from 'enzyme';
import DailyWeather from '../lib/Components/DailyWeather/DailyWeather';
import localStorageMock from '../__mock__/localStorageMock.js';
import App from '../lib/Components/App/App'

describe('DailyWeather', () => {
  let wrapper;
  let app = shallow(<App />)

  beforeEach(() => {
    wrapper = shallow(<DailyWeather days={ app.node.props.children } />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the DayCard component', () => {
    expect(wrapper.find('.dailyCardContainer').length).toEqual(1);
  });
});
