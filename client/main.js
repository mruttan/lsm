import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

import { AppRouter, history } from '../imports/routes/routes';

Tracker.autorun(() => {
  Session.set('isNavOpen', false);

  const selectedPageId = Session.get('selectedPageNum');

});

Tracker.autorun(() => {
  const isNavOpen = Session.get('isNavOpen');

  document.body.classList.toggle('is-nav-open', isNavOpen);
});

Meteor.startup(() => {
  Session.set('selectedPageNum', 1);

  ReactDOM.render(<AppRouter/>, document.getElementById('app'));
});

//gonna refactor closer to notes proj, implementing session and state to show a subset list
//of data where it shows them based on a subset list of page: PAGE_NUM