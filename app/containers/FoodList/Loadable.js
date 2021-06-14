/**
 *
 * Asynchronously loads the component for FoodList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
