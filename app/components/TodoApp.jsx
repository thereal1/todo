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
          text: 'Walk dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Program',
          completed: true
        }, {
          id: uuid(),
          text: 'Eat Lunch',
          completed: true
        }, {
          id: uuid(),
          text: 'Drank',
          completed: false
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
          text: text,
          completed: false
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
  handleToggle: function (id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos})
  },
  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <TodoSearch onSearch={this.handleOnSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
