import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { AppRouter, history } from '../imports/routes/routes';

Tracker.autorun(() => {
  Session.set('isNavOpen', false);
});

Tracker.autorun(() => {
  const isNavOpen = Session.get('isNavOpen');

  document.body.classList.toggle('is-nav-open', isNavOpen);
});


Meteor.startup(() => {
  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});