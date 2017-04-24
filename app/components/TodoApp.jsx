const React = require('react');
const uuid = require('node-uuid');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk dog'
        }, {
          id: uuid(),
          text: 'Program'
        }, {
          id: uuid(),
          text: 'Eat Lunch'
        }, {
          id: uuid(),
          text: 'Drank'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text: text
        }
      ]
    });
  },
  handleOnSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  },
  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleOnSearch} />
        <TodoList todos={todos} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
