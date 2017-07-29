import React from 'react';
import './Welcome.css';
import Search from '../Search/Search';
import Logo from '../Logo/Logo';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="welcomeContainer">
        <Logo />
        <h3 className="welcomeQuote">Wherever you go, no matter what the weather, always bring your own sunshine</h3>
        <Search setLocation={this.props.setLocation} />
      </div>
    );
  }

}
