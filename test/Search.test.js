import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search/Search';
import localStorageMock from '../__mock__/localStorageMock.js';
import Trie from '../lib/trie'
import App from '../lib/Components/App/App'

describe('Search', () => {
  let wrapper;


  beforeEach(() => {
    let mockFn = jest.fn();
    wrapper = shallow(<Search setLocation={mockFn}/>);
    const trie = new Trie();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should be a stateful component', () => {
    wrapper.instance().setState({ hasState: true });
    expect(wrapper.state('hasState')).toEqual(true);
    wrapper.instance().setState({ hasState: false });
    expect(wrapper.state('hasState')).toEqual(false);
  });

  it.skip('should fire a function on enter press', () => {
    // console.log('input', wrapper.find('input').prop('children'));
    // input.simulate(‘keyDown’, {keyCode: 13})

  });

  it('should fire a function on suggestion click', () => {

  })

});
