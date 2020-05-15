import { combineReducers, Reducer } from 'redux';

import { activities } from '../activities';
import { auth } from '../auth';
import { State } from '../types';

const createRootReducer: Function = (): Reducer<State> =>
  combineReducers<State>({
    activities,
    auth,
  });

export default createRootReducer();
