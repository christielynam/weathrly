import React from 'react';
import './Logo.css'

export default class Logo extends React.Component {
  //
  // constructor() {
  //   this.colors = [
  //     'red',
  //     'orange',
  //     'yellow',
  //     'green',
  //     'blue',
  //     'indigo',
  //     'violet',
  //   ];
  //   this.friendly = 'friendly';
  //   this.forecast = 'forecast';
  // }
  //
  // colorLoop() {
  //   [...this.friendly].map(letter => {
  //     return letter
  //   })
  // }

  render() {
    return (
      <div className="welcome-container">
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
    )
  }
}
