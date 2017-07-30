import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search/Search';
import localStorageMock from '../__mock__/localStorageMock.js';

describe('Search', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });
});
