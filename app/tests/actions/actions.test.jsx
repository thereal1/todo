const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const actions = require('actions');

let createMockStore = configureMockStore([thunk]);

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
      todo: {
        id: 'asdw1',
        text: 'asd',
        completed: false,
        createdAt: 0
      }
    };
    let res = actions.addTodo(expectedAction.todo);
    expect(res).toEqual(expectedAction);
  });

  it('should create todo and dispatch ADD_TODO', (done) => {
    const store = createMockStore({});
    const todoText = 'My todo item';

    store.dispatch(actions.startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
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
