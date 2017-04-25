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
});
