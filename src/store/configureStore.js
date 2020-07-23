/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { loadingBarMiddleware } from 'react-redux-loading-bar';
import rootReducer from '../reducers/index';
import rootEpic from '../epics/index';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['router', 'browser'],
  debug: true,
};

const epicMiddleware = createEpicMiddleware();
export const history = createBrowserHistory();
export let persistor;

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. epicMiddleware: Makes redux-observable work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    epicMiddleware,
    routerMiddleware(history),
    loadingBarMiddleware({
      promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
    }),
  ];

  if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);
  }

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
  /* eslint-enable */

  const store = createStore(
    persistReducer(persistConfig, rootReducer(history)),
    initialState,
    composeEnhancers(...enhancers)
  );
  persistor = persistStore(store, null);
  store.persistor = persistor;
  persistor.persist();

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      rootReducer.store.replaceReducer(require('../reducers').default());
    });
  }

  epicMiddleware.run(rootEpic);
  return store;
}
