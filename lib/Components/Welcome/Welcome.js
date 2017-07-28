import React from 'react';
import './Welcome.css';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';

export default class Welcome extends React.Component {

  render() {
    return (
      <div className="welcomeContainer">
        <Logo />
        <Search />
        <h3 className="welcomeQuote">Wherever you go, no matter what the weather, always bring your own sunshine</h3>
      </div>
    );
  }

}
