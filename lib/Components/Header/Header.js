import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

export default class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <Logo />

        <Search />
      </div>
    );
  }
}
