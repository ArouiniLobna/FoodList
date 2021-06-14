/**
 *
 * Tests for ListItem
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { mount } from 'enzyme';
import CheckBox from 'components/layout/atoms/CheckBox';

import ListItem from '../index';

describe('<ListItem />', () => {
  let container;
  let props;

  beforeEach(() => {
    props = {
      itemKey: '3434',
      item: { isDelicious: false, isHealthy: true, label: 'dummy food' },
      setCheckedStatus: jest.fn(),
    };
    container = mount(<ListItem {...props} />);
  });

  it('Expect to render 3 <td />" ', () => {
    expect(container.find('td').length).toBe(3);
  });
  it('Expect to render the item label within a h5" ', () => {
    expect(container.find('h5').text()).toEqual(props.item.label);
  });

  it('Expect to render 2 CheckBox" ', () => {
    expect(container.find(CheckBox).length).toBe(2);
  });
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ListItem {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
