import React, { Component } from 'react';

const ComponentePai = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}

class B13Pai extends Component {
  render() {
    return(
      <>
      <h1>App.js - Pai</h1>
      <ComponentePai>
          <p>SUPIMPA</p>
          <h1>BACANA</h1>
          <span>INCRÍVEL</span>
      </ComponentePai>
      </>
    );
  }
}

export default B13Pai;