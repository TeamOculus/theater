import React from 'react';
import {Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home';
import Theater from './components/theater';
import Space from './components/space';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='theater' component={Theater} />
    <Route path='space' component={Space} />
  </Route>
)
