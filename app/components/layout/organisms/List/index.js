/**
 *
 * List
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/layout/molecules/ListItem';
import styled from 'styled-components';

function List({ list, handleSelectionChange }) {
  // we need to know which are we updating: using the key code used within the data; Assuming it is a unique key
  // we need to know which propery got changes : isDelicious Vs isHealthy
  // we need to know if checked or unchecked
  const handleSetCheckedStatus = (identifierKey, propertyName, isChecked) => {
    handleSelectionChange(identifierKey, propertyName, isChecked);
  };

  return (
    <SList>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>is Delicious </th>
            <th>is Healthy</th>
          </tr>
        </thead>
        <tbody>
          {list.map(function(item) {
            return (
              <ListItem
                setCheckedStatus={handleSetCheckedStatus}
                key={Object.keys(item)[0]}
                item={item[Object.keys(item)[0]]}
                itemKey={Object.keys(item)[0]}
              />
            );
          })}
        </tbody>
      </table>
    </SList>
  );
}

const SList = styled.div`
  max-width: 400px;
  margin: 50px auto 20px;
  table {
    display: block;
    filter: drop-shadow(0px 3px 6px rgba(75, 81, 91, 0.15)),
      drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15));
    thead,
    tbody {
      display: block;
      tr {
        display: block;
        margin: 0;
      }
      th,
      td {
        width: 33.33%;
        display: inline-block;
      }
      th:not(:first-child),
      td:not(:first-child) {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
    thead {
      background-color: #f4f7fc;
      padding: 15px 0;
      color: #606f89;
      font-size: 12px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      font-weight: 100;
      border-bottom: 10px solid #fff;
    }
    tbody {
      background-color: #f8f8f8;
      color: #2e3b52;
      tr {
        border-bottom: 5px solid #fff;
      }
    }
  }
  * {
    box-sizing: border-box;
  }
`;
List.propTypes = {
  list: PropTypes.array,
  handleSelectionChange: PropTypes.func,
};

export default memo(List);
