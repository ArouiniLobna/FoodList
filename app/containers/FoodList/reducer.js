/*
 *
 * FoodList reducer
 *
 */
import produce from 'immer';
import * as types from './constants';

export const initialState = {
  foodList: null,
  foodListLoading: false,
  foodListError: null,
  updatingFoodItemLoading: false,
  updatingFoodItemError: null,
};

/* eslint-disable default-case, no-param-reassign */
const foodListReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case types.LOAD_FOOD_LIST_REQUEST:
        return Object.assign({}, state, {
          foodListLoading: true,
        });
      case types.LOAD_FOOD_LIST_SUCCESS:
        return Object.assign({}, state, {
          foodListLoading: false,
          foodList: action.foodList,
        });
      case types.LOAD_FOOD_LIST_ERROR:
        return Object.assign({}, state, {
          foodListLoading: false,
          foodListError: action.error,
        });
      case types.UPDATE_FOOD_ITEM_REQUEST:
        return Object.assign({}, state, {
          updatingFoodItemError: null,
          updatingFoodItemLoading: true,
        });
      case types.UPDATE_FOOD_ITEM_SUCCESS:
        return {
          ...state,
          foodList: {
            ...state.foodList,
            [action.foodKey]: action.updatedFoodItem,
          },
          updatingFoodItemLoading: false,
        };
      case types.UPDATE_FOOD_ITEM_ERROR:
        return Object.assign({}, state, {
          updatingFoodItemLoading: false,
          foodListError: action.error,
        });
      default:
        return state;
    }
  });

export default foodListReducer;
