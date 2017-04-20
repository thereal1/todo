const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');

const TodoApp = require('TodoApp');

$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render (
  <TodoApp />,
  document.getElementById('app')
);
