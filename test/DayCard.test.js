import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/Components/DayCard/DayCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js';
import Location from '../lib/Components/Location'

describe('DayCard', () => {
  let wrapper;
  let location = new Location(weatherData)

  beforeEach(() => {
    wrapper = shallow( <DayCard
      img={location.dailyForecast[0].icon}
      high={location.dailyForecast[0].high.fahrenheit}
      high={location.dailyForecast[0].low.fahrenheit}
      day={location.dailyForecast[0].date.weekday}
      key={location.dailyForecast[0].period} />)
    });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a condition icon', () => {
    expect(location.dailyForecast[0].icon).toEqual('mostlycloudy')
  });

  it.skip('should display a high temp', () => {
    expect().toEqual('H: 98');
  });

  it.skip('should display a low temp', () => {
    const lowTemp = wrapper.instance().find('p.dayLow');
    expect(lowTemp.text()).toEqual('L: 70');
  });

  it.skip('should display a day', () => {
    const day = wrapper.instance().find('p.day');
    expect(day.text()).toEqual('Monday');
  });
});
