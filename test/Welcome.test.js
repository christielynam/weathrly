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
});
