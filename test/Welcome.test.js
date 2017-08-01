import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/Components/Welcome/Welcome';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the Logo component', () => {
    expect(wrapper.find('Logo').length).toEqual(1);
  });

  it('should render the Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  });

  it('should render a welcome quote', () => {
    const component = shallow(<Welcome />);
    const quote = component.find('h3');
    expect(quote.text()).toEqual('Wherever you go, no matter what the weather, always bring your own sunshine');
  });
});
