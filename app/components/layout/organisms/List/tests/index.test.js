/**
 *
 * Tests for List
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { mount } from 'enzyme';
import ListItem from 'components/layout/molecules/ListItem';
import List from '../index';

describe('<List />', () => {
  let container;
  let props;

  beforeEach(() => {
    props = {
      list: [
        {
          e5d9d9f5: {
            label: 'ice cream',
            isDelicious: true,
            isHealthy: false,
          },
        },
        {
          a9ba692b: {
            label: 'pizza',
            isDelicious: true,
            isHealthy: false,
          },
        },
        {
          ze128a47: {
            label: 'spinach',
            isDelicious: false,
            isHealthy: false,
          },
        },
      ],
      handleSelectionChange: jest.fn(),
    };
    container = mount(<List {...props} />);
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<List {...props} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('expect to render a table', () => {
    expect(container.find('table').length).toBe(1);
  });

  it('expect to render a thead', () => {
    expect(container.find('thead').length).toBe(1);
  });

  it('expect to render a tbody', () => {
    expect(container.find('tbody').length).toBe(1);
  });

  it('expect to render number of ListItem as data length', () => {
    expect(container.find(ListItem).length).toBe(props.list.length);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<List {...props} />);
    expect(firstChild).toMatchSnapshot();
  });
});
