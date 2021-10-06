import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import RickMain from '../pages/RickMain';

function Contents () {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/RickWorld' component={ RickMain } />
      <Route path='*' component={ NotFound } />
    </Switch>
  )
}
export default Contents;