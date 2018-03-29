import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import sagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

class StoreProvider {
  constructor(history, initialState = {}) {
    const saga = sagaMiddleware();
    const router = routerMiddleware(history);
    const middleware = [saga, router];

    /* eslint-disable no-underscore-dangle, no-undef */
    const reduxDevToolsExtensions = window ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : window;
    const composeEnhancers = __DEV__ && reduxDevToolsExtensions ? reduxDevToolsExtensions : compose;
    /* eslint-enable no-underscore-dangle, no-undef */

    const enhancer = composeEnhancers(applyMiddleware(...middleware));

    const store = createStore(rootReducer, initialState, enhancer);
    saga.run(rootSaga);

    this.store = store;

    this.runHotModuleReplacement(store);
  }

  getStore() {
    return this.store;
  }

  runHotModuleReplacement() {
    const store = this.store;
    if (module.hot && store) {
      module.hot.accept('./reducers', () => {
        /* eslint-disable global-require */
        const nextRootReducer = require('./reducers').default;
        /* eslint-enable global-require */
        store.replaceReducer(nextRootReducer);
      });
    }
  }
}

export default StoreProvider;
