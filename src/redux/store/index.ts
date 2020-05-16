import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import { composeEnhancer } from './utils';
import rootReducer from './root-reducer';
import rootSagas from './root-saga';
import { State } from 'redux/types';

import { getPersistedState } from 'services/persisted-state';

const sagaMiddleware = createSagaMiddleware();

const setMiddlewareList = () => {
  const middlewareList: Middleware[] = [sagaMiddleware];
  if (process.env.NODE_ENV === 'development') {
    middlewareList.push(logger);
  }

  return applyMiddleware(...middlewareList);
};

const persistedState = getPersistedState();
const configureStore = (initialState: State | undefined = persistedState) => {
  let store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(setMiddlewareList()),
  );
  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore;
