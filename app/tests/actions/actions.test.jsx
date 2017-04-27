const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import firebase, {firebaseRef} from 'app/firebase';
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

  it('should generate a update todo action', () => {
    let action = {
      type: 'UPDATE_TODO',
      id: 2,
      updates: {completed: false}
    };
    let res = actions.updateTodo(action.id, action.updates);

    expect(res).toEqual(action);
  });

  describe('Tests with firebase todos', () => {
    let testTodoRef;

    beforeEach((done) => {
      testTodoRef = firebaseRef.child('todos').push();
      testTodoRef.set({
        text: 'Something todo',
        completed: false,
        createdAt: 123412
      }).then(() => done());
    });

    afterEach((done) => {
      testTodoRef.remove().then(() => done());
    });

    it('should toggle todo and dispatch UPDATE_TODO action', (done) => {
      const store = createMockStore({});
      const action = actions.startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist()
        done();
      }, done);
    });
  });
});
