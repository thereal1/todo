const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export const AddTodo = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    let {dispatch} = this.props;
    let newTodoText = this.refs.newTodoText.value;
    if (newTodoText.length > 0) {
      this.refs.newTodoText.value = '';
      dispatch(actions.startAddTodo(newTodoText));
    } else {
      this.refs.newTodoText.focus();
    }
  },
  render: function () {
    return (
      <div className='container__footer'>
        <form onSubmit={this.onFormSubmit}>
          <input type='text' ref='newTodoText' placeholder='What do you need to do?' />
          <button className='button primary expanded'>Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
