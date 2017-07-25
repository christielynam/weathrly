import React from 'react';
import './Header.css';
import Logo from './Logo';

export default class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <div className="logo">
          <h1 className="friendly">
            <span id="f">f</span>
            <span id="r">r</span>
            <span id="i">i</span>
            <span id="e">e</span>
            <span id="n">n</span>
            <span id="d">d</span>
            <span id="l">l</span>
            <span id="y">y</span>
          </h1>
          <h1 className="forecast">
            <span id="f2">f</span>
            <span id="o">o</span>
            <span id="r2">r</span>
            <span id="e2">e</span>
            <span id="c">c</span>
            <span id="a">a</span>
            <span id="s">s</span>
            <span id="t">t</span>
          </h1>
        </div>
        <p className="quote">A change in the weather is sufficient to recreate the world and ourselves</p>
        <button>Change Location</button>
      </div>
    );
  }
}
