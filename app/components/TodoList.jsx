const React = require('react');
const {connect} = require('react-redux');

const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;
    let renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        )
      });
    };
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = connect(
  (state) => {
    return {
      todos: state.todos // here you make a prop called todos
    };
  }
)(TodoList);
