import React from 'react';
import { shallow, mount } from 'enzyme';
import DayCard from '../lib/Components/DayCard/DayCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import weatherData from '../__mock__/dataMock.js';
import Location from '../lib/Components/Location';

describe('DayCard', () => {
  let wrapper;
  const location = new Location(weatherData);
  const day = location.dailyForecast[0];

  beforeEach(() => {
    wrapper = shallow(<DayCard
      img={day.icon}
      high={day.high.fahrenheit}
      low={day.low.fahrenheit}
      day={day.date.weekday}
      key={day.period} />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should display a condition icon', () => {
    expect(wrapper.node.props.children[0].props.src).toEqual('assets/mostlycloudy.svg');
  });

  it.skip('should display a high temp', () => {
    expect(wrapper.node.props.children[1].props.children).toEqual(['H: ', '88', '°F']);
  });

  it.skip('should display a low temp', () => {
    expect(wrapper.node.props.children[2].props.children).toEqual('L: 70');
  });

  it('should display a day', () => {
    expect(wrapper.node.props.children[3].props.children).toEqual('Tuesday');
  });
});
