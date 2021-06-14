/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';
import * as types from '../constants';
import { getFoodList, loadFoods } from '../saga';

// const generator = foodListSaga();

describe('foodListSaga Saga', () => {
  describe('getFoodList Saga', () => {
    const getFoodListSaga = loadFoods();

    it('should start task to watch for REDBOOK_SEARCH_MAKES_REQUEST action', () => {
      const takeLatestDescriptor = getFoodListSaga.next().value;
      expect(takeLatestDescriptor).toEqual(
        takeLatest(types.LOAD_FOOD_LIST_REQUEST, getFoodList),
      );
    });
  });
});
