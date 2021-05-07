import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './B13.css'
import Header from './Header';
import Content from './Content';

function B13Route() {
  return (
    <div>
      <BrowserRouter>
      <div className='B13'>
        <Header />
        <h3>-Aula Rotas</h3>
        <Content />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default B13Route;