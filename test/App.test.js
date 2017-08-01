import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App/App';
import localStorageMock from '../__mock__/localStorageMock.js';
import dataMock from '../__mock__/dataMock.js';

describe('App', () => {
  let wrapper;
  const localStorageMock = global.localStorage;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be a stateful component', () => {
    wrapper.instance().setState({ hasState: true });
    expect(wrapper.state('hasState')).toEqual(true);
    wrapper.instance().setState({ hasState: false });
    expect(wrapper.state('hasState')).toEqual(false);
  });

  it('should render the Welcome component when there is no saved location', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  });

  it('should save location to localStorage', () => {
    wrapper.instance().setState({ location: 'Birmingham' });
    wrapper.instance().updateLocalStorage();
    expect(localStorageMock.getItem('location')).toEqual('Birmingham');
  });


  it.skip('should be able to pull location back from localStorage', () => {
    localStorageMock.setItem('location', 'Birmingham, AL');
    expect(wrapper.instance().getFromLocal()).toEqual('Birmingham, AL');
  });

  it('should render the Header, CurrentWeather, HourlyWeather, and DailyWeather components if a location persists', () => {
    wrapper.instance().setState({ location: 'Birmingham' });
    expect(wrapper.find('Header').length).toEqual(1);
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
    expect(wrapper.find('HourlyWeather').length).toEqual(1);
    expect(wrapper.find('DailyWeather').length).toEqual(1);
  });
});
