const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const {Todo} = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch toggleTodo action on click', () => {
    const todoData = {
      id: 122,
      text: 'todo test',
      completed: true
    };
    let spy = expect.createSpy();
    let todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />);
    let $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });
});
