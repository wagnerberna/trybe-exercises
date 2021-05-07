import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import UserList from './UserList'

// import NotFound from '../Components/NotFound';

class CadRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/B16Cadastro/Login" component={ Login } />
        <Route path="/B16Cadastro/Register" component={ Register } />
        <Route path="/B16Cadastro/UserList" component={ UserList } />
      </Switch>
    );
  }
}

export default CadRoute;