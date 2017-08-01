import React from 'react';
import { shallow, mount } from 'enzyme';
import Logo from '../lib/Components/Logo/Logo';

describe('Logo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render the logo to the page', () => {
    const component = shallow(<Logo />);
    const logo = component.find('h1.friendly');
    expect(logo.text()).toEqual('friendly');
  });

  it('should render the logo to the page', () => {
    const component = shallow(<Logo />);
    const logo = component.find('h1.forecast');
    expect(logo.text()).toEqual('forecast');
  });
});
