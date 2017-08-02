import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        <Logo />
        <Search setLocation={this.props.setLocation} />
      </div>
    );
  }
}
