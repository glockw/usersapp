import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Users from './users/Users';

export default (
    <Route path="/" component={App}>
      <IndexRoute component={Users} />
    </Route>
  );