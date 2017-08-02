import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/Components/DayCard/DayCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js';
import Location from '../lib/Components/Location'

describe('DayCard', () => {
  let wrapper;
  let location = new Location(weatherData.dailyForecast)
  console.log(location);

  beforeEach(() => {
    wrapper = shallow( <DayCard img={location.dailyForecast}
                                temp={}
                                time={}
                                key={} />)
  });

  afterEach(() => {
    localStorage.clear();
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should display a condition icon', () => {
    const icon = wrapper.instance().find('img');

    expect(icon.prop('src')).toEqual('http://icons.wxug.com/i/c/k/clear.gif');
  });

  it.skip('should display a high temp', () => {
    const hiTemp = wrapper.instance().find('p.dayHigh');
    expect(hiTemp.text()).toEqual('H: 98');
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
