/* global window:true */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import createSagaMiddleware from 'redux-saga';

import { Creators } from './global/globalActions';

/**
* Reducer
*/
import reducer from './reducers';

/**
* Sagas
*/
import rootSagas from './sagas';

/**
 * ## configureStore
 * @param {Object} the state
 */
export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

    const store = createStore(
        reducer,
        initialState,
        composeEnhancers(autoRehydrate(), applyMiddleware(
            sagaMiddleware,
            thunk
        ))
      );

      // to backup state in local storage and restore on load
      // do no persist in development mode
      if (process.env.NODE_ENV === 'development') {
          store.dispatch(Creators.rehydrationCompleted(true));
      } else {
          persistStore(store, {
              transforms: [immutableTransform()],
              blacklist: ['global', 'auth', 'timeline']
          }, () => {
              store.dispatch(Creators.rehydrationCompleted(true));
          }); // .purge(); // to clear local storage, REMOVE PURGE IN LIVE MODE
      }

    sagaMiddleware.run(rootSagas);

    return store;
}
