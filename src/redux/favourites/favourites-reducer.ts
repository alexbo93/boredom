import { Action } from 'redux';

import {
  ADD_FAVOURITE,
  REMOVE_FAVOURITE,
  REMOVE_FAVOURITES,
} from './favourites-actions';
import { Activities, Activity } from '../activities/activities-types';
import { ActionStandard } from '../types';

const initialState: Activities = {};
const favouritesReducer = (
  state: Activities = initialState,
  action: ActionStandard<Activity> | ActionStandard<string>,
) => {
  switch (action.type) {
    case ADD_FAVOURITE:
      const activity = action.payload as Activity;
      const { id } = activity;
      return { ...state, [id]: activity };
    case REMOVE_FAVOURITE:
      const idToRemove = action.payload as string;
      const { [idToRemove]: val, ...rest } = state;
      return rest;
    case REMOVE_FAVOURITES:
      return initialState;
    default:
      return state;
  }
};

export default favouritesReducer;
