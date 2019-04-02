import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Session } from 'meteor/session';

import HomePage from '../ui/HomePage';
import Contact from '../ui/Contact';

export const history = createHistory();

let isUnauthenticatedPage = false;

const ChangeTracker = withRouter(({ match, location, history }) => {
  const pathName = location.pathname;

  return false;
});

//NotFound component does not work as intended, perhaps i need to route to something like
// /reviews? I don't really want to though...maybe it is a good idea

export const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <ChangeTracker />
    </div>
  </Router>
);