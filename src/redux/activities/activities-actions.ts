import { Activities } from './activities-types';

export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const SET_ACTIVITIES = 'SET_ACTIVITIES';

export const getActivities = () => ({
  type: GET_ACTIVITIES,
});

export const setActivities = (payload: Activities) => ({
  type: SET_ACTIVITIES,
  payload,
});
