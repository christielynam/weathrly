import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from '../lib/Components/Logo/Logo';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('Logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
