import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import immutableTransform from 'redux-persist-transform-immutable';
import createSagaMiddleware from 'redux-saga';

import { rehydrationCompleted } from './global/globalActions';

/**
* Reducer
*/
import reducer from './reducers';

/**
* Sagas
*/
import rootSagas from './sagas';

/**
* Init logger
*/
const logger = createLogger();

/**
 * ## configureStore
 * @param {Object} the state
 */
export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer,
        initialState,
        compose(autoRehydrate(), applyMiddleware(
            sagaMiddleware,
            thunk,
            logger
        ))
      );

    // to backup state in local storage and restore on load
    persistStore(store, {
        transforms: [immutableTransform()],
        blacklist: ['global']
    }, () => {
        store.dispatch(rehydrationCompleted(true));
    });

    sagaMiddleware.run(rootSagas);

    return store;
}
