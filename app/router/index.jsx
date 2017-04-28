import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

const redirectLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};


export default (
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRoute component={Login} onEnter={redirectLoggedIn} />
      <Route path='todos' component={TodoApp} onEnter={requireLogin} />
    </Route>
  </Router>
);
