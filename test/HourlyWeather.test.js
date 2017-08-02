import React from 'react';
import { shallow, mount } from 'enzyme';
import HourlyWeather from '../lib/Components/HourlyWeather/HourlyWeather';
import localStorageMock from '../__mock__/localStorageMock.js';
import App from '../lib/Components/App/App'
import HourCard from '../lib/Components/HourCard/HourCard'
import weatherData from '../__mock__/dataMock'

describe('HourlyWeather', () => {
  let wrapper;
  hourCard = shallow(<HourCard
    img={weatherData.hourly_forecast[0].icon}
    temp={weatherData.hourly_forecast[0].temp.english}
    time={weatherData.hourly_forecast[0].FCTTIME.civil}
    key={weatherData.hourly_forecast[0].FCTTIME.hour} />);

  beforeEach(() => {
    wrapper = shallow(<HourlyWeather  setLocation={hourCard}/>);
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
