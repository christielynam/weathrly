import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyWeather from '../lib/Components/HourlyWeather/HourlyWeather';
import localStorageMock from '../__mock__/localStorageMock.js';
import App from '../lib/Components/App/App'

describe('HourlyWeather', () => {
  let wrapper;
  let app = shallow(<App />)

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather hours={ app.node.props.children }/>);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render its children', () => {
    expect(wrapper.find('.hourlyCardContainer').length).toEqual(1)
  })
});
