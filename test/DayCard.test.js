import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/Components/DayCard/DayCard';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('DayCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DayCard />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a condition icon', () => {
    const component = shallow(<HourCard />);
    const icon = component.find('img');
    expect(image.prop('src')).toEqual(`assets/${hour.img}.svg`);
  });

  it('should display a high temp', () => {
    const component = shallow(<HourCard />);
    const hiTemp = component.find('p.dayHigh');
    expect(hiTemp.text()).toEqual('');
  });

  it('should display a low temp', () => {
    const component = shallow(<HourCard />);
    const lowTemp = component.find('p.dayLow');
    expect(lowTemp.text()).toEqual('');
  });

  it('should display a day', () => {
    const component = shallow(<HourCard />);
    const day = component.find('p.day');
    expect(day.text()).toEqual('');
  });
});
