import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import ContentLinks from './Components/ContentLinks';
import ContentRoute from './Components/ContentRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ContentLinks />
        <ContentRoute />
      </BrowserRouter>
    );
  }
}

export default App;
