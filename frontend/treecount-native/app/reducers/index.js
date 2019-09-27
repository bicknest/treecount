import {combineReducers} from 'redux';

import {cardNavigation} from '../navigator';
import myUser from './myUser';
//import all the reducers to be!

const version = (state = '') => state;

const staticReducers = Object.assign(
  {},
  myUser,
  {
    cardNavigation,
  }
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
