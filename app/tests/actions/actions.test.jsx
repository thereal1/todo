const expect = require('expect');

const actions = require('actions');

describe('Actions', () => {
  it('should generate searchText action', () => {
    let expectedAction = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some text'
    };
    let res = actions.setSearchText('Some text');

    expect(res).toEqual(expectedAction);
  });

  it('should generate addTodo action', () => {
    let expectedAction = {
      type: 'ADD_TODO',
      text: 'thing todo'
    };
    let res = actions.addTodo('thing todo');

    expect(res).toEqual(expectedAction);
  });

  it('should generate ADD_TODOS action object', () => {
    let todos = [{
      id: 11,
      text: 'text',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    };
    let res = actions.addTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    let expectedAction = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    let res = actions.toggleShowCompleted();

    expect(res).toEqual(expectedAction);
  });

  it('should generate a toggle todo action', () => {
    let expectedAction = {
      type: 'TOGGLE_TODO',
      id: 2
    };
    let res = actions.toggleTodo(2);

    expect(res).toEqual(expectedAction);
  });
});
