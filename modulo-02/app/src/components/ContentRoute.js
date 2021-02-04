import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import U01 from '../componentsU01/U01';
import B11 from '../componentsB11/B11';
import B12 from '../componentsB12Forms/B12';
import B12F from '../componentsB12Forms/B12R';
import B12C from '../componentsB12Card/B12';
import B13Dog from '../componentsB13API/B13Dog';
import B13DogR from '../componentsB13API/B13DogR';
import B13Pai from '../componentsB13Pai/B13Pai';
import B13Route from '../componentsB13Route/B13';

class ContentRoute extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/Home" component={ Home } />
          <Route path="/componentsU01/U01" component={ U01 } />
          <Route path="/componentsB11/B11" component={ B11 } />
          <Route path="/componentsB12Forms/B12" component={ B12 } />
          <Route path="/componentsB12Forms/B12R" component={ B12F } />
          <Route path="/componentsB12Card/B12" component={ B12C } />
          <Route path="/componentsB13API/B13Dog" component={ B13Dog } />
          <Route path="/componentsB13API/B13DogR" component={ B13DogR } />
          <Route path="/componentsB13Pai/B13Pai" component={ B13Pai } />
          <Route path="/componentsB13Pai/B13Pai" component={ B13Pai } />
          <Route path="/componentsB13Route/B13" component={ B13Route } />
        </Switch>
      </main>
    );
  }
}

export default ContentRoute;
