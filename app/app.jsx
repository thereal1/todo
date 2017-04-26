const React = require('react');
const ReactDOM = require('react-dom');
const {Provider} = require('react-redux');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

const actions = require('actions');
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

store.subscribe(() => {
  const state = store.getState();
  console.log('New State - ', state);

  TodoAPI.setTodos(state.todos);
});

let initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
