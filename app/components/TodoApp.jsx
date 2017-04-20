const React = require('react');

const TodoList = require('TodoList');

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
  render: function () {
    let {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
