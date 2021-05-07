import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import CadRoute from './CadRoute';

class CadHome extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        <h3>React - Redux - Cadastro</h3>
        <ul>
          <li><Link to="/B16Cadastro/Login">Login</Link></li>
          <li><Link to="/B16Cadastro/Register">Cadastro</Link></li>
          <li><Link to="/B16Cadastro/UserList">Lista de Usuários</Link></li>
        </ul>
        <CadRoute />
      </BrowserRouter>
      </>
    );
  }
}

export default CadHome;