import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/index';

import NavBar from './Components/NavBar'
import ContentRouter from './Components/ContentRouter'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <NavBar />
        <ContentRouter />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
