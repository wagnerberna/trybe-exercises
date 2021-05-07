import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import ContentRoute from './components/ContentRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <ContentRoute />
      </BrowserRouter>
    );
  }
}

export default App;
