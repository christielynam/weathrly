import React from 'react';
import './Header.css';
import Logo from './Logo';
import Search from './Search';

export default class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <Logo />
        <div className="dateCity">
          <h3 className="city">Birmingham, AL</h3>
          <h3 className="date">Tuesday, July 25</h3>
        </div>
        {/* <p className="quote">A change in the weather is sufficient to recreate the world and ourselves</p> */}
        <Search />
      </div>
    );
  }
}
