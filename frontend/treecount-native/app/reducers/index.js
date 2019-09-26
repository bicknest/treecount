import {combineReducers} from 'redux';

import {cardNavigation} from '../navigator';
//import all the reducers to be!


const version = (state = '') => state;

const staticReducers = Object.assign(
  {},
  // add static reducers
);

/*
 * Creates the main reducer with the async loaded ones
 */

const createReducer = function createReducer(asyncReducers) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
};

export default createReducer;
