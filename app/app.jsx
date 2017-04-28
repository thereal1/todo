const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {hashHistory} = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();
import firebase from 'app/firebase/';
import Router from 'app/router/';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
);
