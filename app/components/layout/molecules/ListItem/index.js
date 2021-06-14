/**
 *
 * ListItem
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import CheckBox from 'components/layout/atoms/CheckBox';
import styled from 'styled-components';

function ListItem({ item, setCheckedStatus, itemKey }) {
  const handleSetCheckedStatus = (propertyName, isChecked) => {
    setCheckedStatus(itemKey, propertyName, isChecked);
  };
  return (
    <SListItem
      role="group" // as part of accessibilty we need to group the checkboxes
      aria-labelledby={`label-${itemKey}`}
      isHealthy={item.isHealthy}
      isDelicious={item.isDelicious}
    >
      <td>
        <h5 id={`label-${itemKey}`}>{item.label}</h5>
      </td>
      <td>
        <CheckBox
          checked={item.isDelicious}
          label="is Delicious"
          onChange={handleSetCheckedStatus}
          dataName="isDelicious"
        />
      </td>
      <td>
        <CheckBox
          checked={item.isHealthy}
          label="is Healthy"
          onChange={handleSetCheckedStatus}
          dataName="isHealthy"
        />
      </td>
    </SListItem>
  );
}

const SListItem = styled.tr`
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: ${props => (props.isHealthy ? '#E0EEE0' : 'transparent')};
  transition: 1s;
  h5 {
    margin: 0;
    transition: 1s;
    text-indent: ${props => (props.isDelicious ? '30px' : '0')};
  }
`;

ListItem.propTypes = {
  setCheckedStatus: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  itemKey: PropTypes.string.isRequired, // this the food item unique identifier
};

export default memo(ListItem);
