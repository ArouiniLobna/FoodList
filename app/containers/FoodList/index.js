/**
 *
 * FoodList
 *
 */

// in Real time application with bigger Data, the update functionality should not be linked to main redux container,as will cause refresh fr the full table items. Best approach will be,
// ListItem componont will be a connected component that is linke dto an api that update a single item. This api can be listened to using something line WebSocket,
// so the UI will be updated immedialty using the local state to reflect the changes, however the checkoboxes will keep disabled until our Api listener comes back with success response.
// This pattern help to guide the user step by step on what is hepping without locking them from inetracting with the application.

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import List from 'components/layout/organisms/List';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { formattingData } from 'helpers/formattingData';
import { makeSelectFoods, makeSelectFoodsLoading } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadFoodList, updateFoodItem } from './actions';

export function FoodList({
  handleloadFoodList,
  handleupdateFoodItem,
  foodList,
  foodsLoading,
}) {
  useInjectReducer({ key: 'foodList', reducer });
  useInjectSaga({ key: 'foodList', saga });

  useEffect(() => {
    handleloadFoodList();
  }, [foodList]);

  const onhandleupdateFoodItem = (key, propertyname, value) => {
    const updatedFoodItem = foodList[key];
    updatedFoodItem[propertyname] = value;
    handleupdateFoodItem(key, updatedFoodItem);
  };

  if (foodsLoading || (!foodsLoading && foodList === null)) {
    return <h1>loading....</h1>;
  }

  return (
    <List
      handleSelectionChange={onhandleupdateFoodItem}
      list={formattingData(foodList)}
    />
  );
}

FoodList.propTypes = {
  handleloadFoodList: PropTypes.func.isRequired,
  handleupdateFoodItem: PropTypes.func.isRequired,
  foodList: PropTypes.object,
  foodsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  foodList: makeSelectFoods(),
  foodsLoading: makeSelectFoodsLoading(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleloadFoodList: () => dispatch(loadFoodList()),
    handleupdateFoodItem: (itemKey, foodPayload) =>
      dispatch(updateFoodItem(itemKey, foodPayload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(FoodList);
