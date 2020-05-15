import { Activity } from '../activities/activities-types';

export const GET_RANDOM_ACTIVITY = 'GET_RANDOM_ACTIVITY';
export const REMOVE_RANDOM_ACTIVITY = 'REMOVE_RANDOM_ACTIVITY';
export const SET_RANDOM_ACTIVITY = 'SET_RANDOM_ACTIVITY';

export const getRandomActivity = () => ({
  type: GET_RANDOM_ACTIVITY,
});

export const setRandomActivity = (payload: Activity) => ({
  type: SET_RANDOM_ACTIVITY,
  payload,
});

export const removeRandomActivity = () => ({
  type: REMOVE_RANDOM_ACTIVITY,
});
