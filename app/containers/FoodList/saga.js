import { takeLatest, put, all } from 'redux-saga/effects';
import { foodList } from 'constants/data';
import * as types from './constants';
import {
  loadFoodListSuccess,
  loadFoodListError,
  updateFoodItemSuccess,
  updateFoodItemError,
} from './actions';

export function* getFoodList() {
  try {
    // in REAL TIME application, the data will be fetched from an api using try catch blocks
    // const foodList = yield call(request, requestURL);
    // store formatted data as it easier to map through for UI rendering
    // const formattedData = formattingData(foodList);
    yield put(loadFoodListSuccess(foodList));
  } catch (err) {
    yield put(loadFoodListError(err));
  }
}

export function* loadFoods() {
  yield takeLatest(types.LOAD_FOOD_LIST_REQUEST, getFoodList);
}

export function* updateFood(action) {
  try {
    // in REAL TIME application, an api call should be made to update the item
    yield put(updateFoodItemSuccess(action.foodKey, action.updatedFoodItem));
  } catch (err) {
    yield put(updateFoodItemError(err));
  }
}

export function* updateFoodItem() {
  yield takeLatest(types.UPDATE_FOOD_ITEM_REQUEST, updateFood);
}

// Individual exports for testing
export default function* foodListSaga() {
  // See example in containers/HomePage/saga.js
  yield all([loadFoods(), updateFoodItem()]);
}
