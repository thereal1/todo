const React = require('react');
const {connect} = require('react-redux');

import Todo from 'Todo';
const TodoAPI = require('TodoAPI');

export const TodoList = React.createClass({
  render: function () {
    let {todos, showCompleted, searchText} = this.props;
    let renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText)
      if (todos.length === 0) {
        return (
          <p className='container__message'>Nothing to do!</p>
        );
      }
      return filterTodos.map((todo) => {
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

export default connect(
  (state) => {
    return state;
  }
)(TodoList);
