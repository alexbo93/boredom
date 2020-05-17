import { Action } from 'redux';
import { AuthModel } from './auth/auth-types';
import { Activities, Activity } from './activities/activities-types';

export type ActionStandard<T> = Action & {
  payload: T;
};

export type State = {
  activities: Activities;
  auth: AuthModel;
  favourites: Activities;
  randomActivity: Activity | null;
  favSlidePanel: boolean;
  randomActivityPanel: boolean;
};
