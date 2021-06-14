/*
 *
 * FoodList actions
 *
 */
import * as types from './constants';

export function loadFoodList() {
  return {
    type: types.LOAD_FOOD_LIST_REQUEST,
  };
}
export function loadFoodListSuccess(foodList) {
  return {
    type: types.LOAD_FOOD_LIST_SUCCESS,
    foodList,
  };
}
export function loadFoodListError(err) {
  return {
    type: types.LOAD_FOOD_LIST_ERROR,
    error: err,
  };
}

// updating food item
export function updateFoodItem(foodKey, updatedFoodItem) {
  return {
    type: types.UPDATE_FOOD_ITEM_REQUEST,
    foodKey,
    updatedFoodItem,
  };
}
export function updateFoodItemSuccess(foodKey, updatedFoodItem) {
  return {
    type: types.UPDATE_FOOD_ITEM_SUCCESS,
    foodKey,
    updatedFoodItem,
  };
}
export function updateFoodItemError(err) {
  return {
    type: types.UPDATE_FOOD_ITEM_ERROR,
    error: err,
  };
}
