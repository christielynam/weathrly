import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/Components/Header/Header';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
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
});
