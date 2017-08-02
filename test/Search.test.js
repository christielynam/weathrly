import React from 'react';
import { shallow, mount } from 'enzyme';
import Search from '../lib/Components/Search/Search';
import localStorageMock from '../__mock__/localStorageMock.js';
import Trie from '../lib/trie'

describe('Search', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<Search setLocation={jest.fn(wrapper.setState( { input: 'A' } ))}/>);
    const trie = new Trie()
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
<<<<<<< HEAD

  it('should set the state input on change', () => {
    wrapper.instance().setState();
    console.log(wrapper.state.input);
    expect(wrapper.state('input')).toEqual('A');
  })

=======
>>>>>>> 1018de37a2f46c4470b11f06ba2a8a7934b534b3
});
