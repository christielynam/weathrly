import React from 'react';
import Search from './Search';
import Logo from './Logo';
import './Welcome.css';

export default class Welcome extends React.Component {

  closeWelcome() {

  }

  render() {
    return (
      <div>
        <div className="welcome-container">
          <Logo />
          <Search />
          <h3>Wherever you go, no matter what the weather, always bring your own sunshine, Darlin</h3>
        </div>
      </div>
    );
  }

}
