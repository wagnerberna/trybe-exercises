import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './NotFound';
import CadHome from '../B16Cadastro/Home';
import Home from './Home'

class ContentRouter extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/B16Cadastro/Home" component={ CadHome } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    );
  }
}

export default ContentRouter;


