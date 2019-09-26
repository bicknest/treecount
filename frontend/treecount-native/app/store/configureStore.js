// eslint-disable
import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'react-redux';
import {persistStore, createTransform, getStoredState} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import Immutable from 'seamless-immutable';
import _ from 'lodash';

import createReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState, config) {
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const baseReducers = createReducer();
  const store = createStore(baseReducers, initialState, compose(...enhancers));

  // Create hook for async sagas once i have figured out and applied middleware
  store.runSaga = sagaMiddleware.run;
  sagaMiddleware.run(rootSaga);

  // Initialize store with no async reducers
  store.asyncReducers = {};

  let fsPersistor;

  // Handle migrating from AsyncStorage to redux-persist-filesystem-storage
  async function migrateFromAsyncStorage(fsError, fsResult) {
    if (_.isEmpty(fsResult)) {
      // if state from fs storage is empty, try to read old data from AsyncStorage
      try {
        const asyncState = await getStoredState({
          storage: AsyncStorage,
          transforms: [
            createTransform(
              inboundState => inboundState,
              outboundState => Immutable.from(outboundState)
            ),
          ],
        });
        if (!_.isEmpty(asyncState)) {
          // if data exists in 'AsyncStorage' - rehydrate fs persistor with it
          fsPersistor.rehydrate(asyncState, {serial: false});
        }
      } catch (getStateError) {
        // eslint-disable-next-line no-console
        console.warn('getStoredState error', getStateError);
      }
    }
  }

  fsPersistor = persistStore(
    store,
    {
      debounce: 50,
      storage: FilesystemStorage,
      whitelist: [
        //all the reducers to allow persist whitelist
      ],
      transforms: [
        // after rehydrating turn to immutable
        createTransform(
          inboundState => inboundState,
          outboundState => Immutable.from(outboundState)
        ),
      ],
    },
    (fsError, fsResult) =>
      migrateFromAsyncStorage(fsError, fsResult).then(config.onRehydrate)
  );
  return store;
}
