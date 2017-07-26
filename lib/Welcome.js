import React from 'react';
import Search from './Search';
import Logo from './Logo';
// import './Welcome.css';

export default class Welcome extends React.Component {

  render() {
    return (
      <div>
        <h1 className="welcome">welcome</h1>
        <Search />
        <h3>Wherever you go, no matter what the weather, always bring your own sunshine</h3>
      </div>
    );
  }

}
