const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should call onAddTodo prop with valid data', () => {
    const todoText = 'Check mail';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call onAddTodo prop with valid data', () => {
    const todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo addTodo={spy} />);
    let $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.newTodoText.value = todoText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
