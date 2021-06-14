import {
  loadFoodList,
  loadFoodListError,
  loadFoodListSuccess,
  updateFoodItem,
  updateFoodItemSuccess,
  updateFoodItemError,
} from '../actions';
import * as types from '../constants';

describe('FoodList actions', () => {
  describe('loadFoodList Action', () => {
    it('has a type of LOAD_FOOD_LIST_REQUEST', () => {
      const expected = {
        type: types.LOAD_FOOD_LIST_REQUEST,
      };
      expect(loadFoodList()).toEqual(expected);
    });
  });
  describe('loadFoodListSuccess Action', () => {
    it('has a type of LOAD_FOOD_LIST_SUCCESS', () => {
      const expected = {
        type: types.LOAD_FOOD_LIST_SUCCESS,
        foodList: {},
      };
      expect(loadFoodListSuccess({})).toEqual(expected);
    });
  });
  describe('loadFoodListError Action', () => {
    it('has a type of LOAD_FOOD_LIST_ERROR', () => {
      const expected = {
        type: types.LOAD_FOOD_LIST_ERROR,
        error: {},
      };
      expect(loadFoodListError({})).toEqual(expected);
    });
  });

  // update food

  describe('updateFoodItem Action', () => {
    it('has a type of UPDATE_FOOD_ITEM_REQUEST', () => {
      const expected = {
        type: types.UPDATE_FOOD_ITEM_REQUEST,
        foodKey: '654',
        updatedFoodItem: {},
      };
      expect(updateFoodItem('654', {})).toEqual(expected);
    });
  });
  describe('updateFoodItemSuccess Action', () => {
    it('has a type of UPDATE_FOOD_ITEM_SUCCESS', () => {
      const expected = {
        type: types.UPDATE_FOOD_ITEM_SUCCESS,
        foodKey: '654',
        updatedFoodItem: {},
      };
      expect(updateFoodItemSuccess('654', {})).toEqual(expected);
    });
  });
  describe('loadFoodListErupdateFoodItemErrorror Action', () => {
    it('has a type of UPDATE_FOOD_ITEM_ERROR', () => {
      const expected = {
        type: types.UPDATE_FOOD_ITEM_ERROR,
        error: {},
      };
      expect(updateFoodItemError({})).toEqual(expected);
    });
  });
});
