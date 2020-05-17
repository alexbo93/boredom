import { combineReducers, Reducer } from 'redux';

import { activities } from '../activities';
import { auth } from '../auth';
import { favourites } from '../favourites';
import { randomActivity } from '../random-activity';
import { favSlidePanel } from '../fav-slide-panel';
import { randomActivityPanel } from '../random-activity-panel';
import { State } from '../types';

const createRootReducer: Function = (): Reducer<State> =>
  combineReducers<State>({
    activities,
    auth,
    favourites,
    randomActivity,
    favSlidePanel,
    randomActivityPanel,
  });

export default createRootReducer();
