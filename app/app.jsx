const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

store.dispatch(actions.startAddTodos());

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/'>
        <IndexRoute component={Login} />
        <Route path='todos' component={TodoApp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
