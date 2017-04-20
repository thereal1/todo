const React = require('react');

const TodoList = require('TodoList');
const AddTodo = require('AddTodo');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk dog'
        }, {
          id: 2,
          text: 'Program'
        }, {
          id: 3,
          text: 'Fuck Bitches'
        }, {
          id: 4,
          text: 'Get Money'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert(text);
  },
  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
        <AddTodo addTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
