import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the foodList state domain
 */

const selectFoodListDomain = state => state.foodList || initialState;

/**
 * Other specific selectors
 */

const makeSelectFoods = () =>
  createSelector(
    selectFoodListDomain,
    foodListState => foodListState.foodList,
  );

const makeSelectFoodsLoading = () =>
  createSelector(
    selectFoodListDomain,
    foodListState => foodListState.foodListLoading,
  );

/**
 * Default selector used by FoodList
 */

const makeSelectFoodList = () =>
  createSelector(
    selectFoodListDomain,
    substate => substate,
  );

export default makeSelectFoodList;
export { selectFoodListDomain, makeSelectFoods, makeSelectFoodsLoading };
