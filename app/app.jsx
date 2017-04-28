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
    hashHistory.push('/todos');
  } else {
    hashHistory.push('/');
  }
});

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('app')
);
