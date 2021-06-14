/**
 *
 * Tests for CheckBox
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { mount } from 'enzyme';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import CheckBox from '../index';

describe('<CheckBox />', () => {
  let container;
  let props;

  beforeEach(() => {
    props = {
      dataName: 'field-test',
      label: 'field label',
      checked: false,
      onChange: jest.fn(),
    };
    container = mount(<CheckBox {...props} />);
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<CheckBox {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render input field with checkbox type: ', () => {
    expect(container.find('input[type="checkbox"]').length).toBe(1);
  });
  it('should render label with text: ', () => {
    expect(container.find('label span').text()).toBe('field label');
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<CheckBox {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
