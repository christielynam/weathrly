import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/Components/App/App';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
