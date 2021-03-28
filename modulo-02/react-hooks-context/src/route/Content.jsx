import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

function Contents () {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='*' component={ NotFound } />
    </Switch>
  )
}
export default Contents;