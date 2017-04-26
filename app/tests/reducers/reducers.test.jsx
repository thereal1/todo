const expect = require('expect');
const df = require('deep-freeze-strict');

const reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      let expectedAction = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'moons'
      };
      let res = reducers.searchTextReducer(df(''), df(expectedAction));

      expect(res).toEqual(expectedAction.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should change the showCompletedStatus', () => {
      let expectedAction = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      let res = reducers.showCompletedReducer(df(false), df(expectedAction));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk dog'
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toBe(action.text);
    });

    it('should toggle todo', () => {
      let todos = [{
        id: '123',
        text: 'Eat',
        completed: true,
        createdAt: 12,
        completedAt: 322
      }];
      let action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };
      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

  it('should add existing todos', () => {
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
    let res = reducers.todosReducer(df([]), df(action));
    expect(res.length).toBe(1); // equal
    expect(res[0]).toEqual(todos[0]);
  });
});
