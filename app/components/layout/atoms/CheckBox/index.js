import React, { memo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function CheckBox({ className, checked, label, dataName, onChange }) {
  const [isChecked, seIsChecked] = useState(checked);

  const handleOnChange = e => {
    onChange(e.target.getAttribute('data-name'), !isChecked);
    seIsChecked(!isChecked);
  };
  return (
    <HiddenLabel>
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          data-name={dataName}
          checked={isChecked}
          onChange={handleOnChange}
        />
        <StyledCheckbox checked={isChecked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <span>{label}</span>
    </HiddenLabel>
  );
}

CheckBox.propTypes = {
  className: PropTypes.string, // custom class name
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  dataName: PropTypes.string, // the property name that needs to be updated in the json
};

const HiddenLabel = styled.label`
  width: 16px;
  height: 16px;
  line-height: 1;
  display: inline-block;
  & span {
    opacity: 0;
    position: absolute;
  }
`;
const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  height: 100%;
`;

const Icon = styled.svg`
  fill: none !important;
  stroke: white;
  stroke-width: 2px;
  vertical-align: unset;
`;
// Hide checkbox visually but remain accessible to screen readers.
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  &:focus + div {
    box-shadow: 0 0 0 3px #bfc8d9;
  }
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background: ${props => (props.checked ? '#388e3c' : '#fff')};
  border-radius: 3px;
  transition: all 150ms;
  border: ${props =>
    props.checked ? ' 1px solid #388e3c' : ' 1px solid #7d90b2'};

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')};
  }
`;

export default memo(CheckBox);
