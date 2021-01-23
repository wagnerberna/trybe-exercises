import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Teste from '../Teste';
import B11 from '../ComponentsB11/B11';
import B12 from '../ComponentsB12/B12';
import B12R from '../ComponentsB12/B12R';


class ContentRoute extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/Teste" component={ Teste } />
          <Route path="/ComponentsB11/B11" component={ B11 } />
          <Route path="/ComponentsB12/B12" component={ B12 } />
          <Route path="/ComponentsB12/B12R" component={ B12R } />
        </Switch>
      </main>
    );
  }
}

export default ContentRoute;
