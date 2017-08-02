import React from 'react';
import { shallow, mount } from 'enzyme';
import HourCard from '../lib/Components/HourCard/HourCard';
import localStorageMock from '../__mock__/localStorageMock.js';
import { dataMock } from '../__mock__/dataMock.js';

describe('HourCard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HourCard />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it.skip('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it.skip('should display a condition icon', () => {
    const component = shallow(<HourCard />);
    const icon = component.find('img');
    expect(image.prop('src')).toEqual('http://icons.wxug.com/i/c/k/clear.gif');
  });

  it.skip('should display a temp', () => {
    const component = shallow(<HourCard />);
    const temp = component.find('h3');
    expect(temp.text()).toEqual('86.1');
  });

  it.skip('should display a time', () => {
    const component = shallow(<HourCard />);
    const time = component.find('p');
    expect(time.text()).toEqual('');
  });
});
