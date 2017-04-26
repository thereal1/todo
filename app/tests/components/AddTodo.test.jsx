const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const todoText = 'Check mail';
    let action = {
      type: 'ADD_TODO',
      text: todoText
    };
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {
    const todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />); // passing dispatch down as a prop as this is not the connected version
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
