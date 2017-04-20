const React = require('react');

const AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    let newTodoText = this.refs.newTodoText.value;
    if (newTodoText.length > 0) {
      this.refs.newTodoText.value = '';
      this.props.addTodo(newTodoText);
    } else {
      this.refs.newTodoText.focus();
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='newTodoText' placeholder='What do you need to do?' />
          <button className='button primary expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
