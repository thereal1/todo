const React = require('react');

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
          id: 1,
          text: 'Walk dog'
        }, {
          id: 2,
          text: 'Program'
        }, {
          id: 3,
          text: 'Eat Lunch'
        }, {
          id: 4,
          text: 'Drank'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert(text);
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
