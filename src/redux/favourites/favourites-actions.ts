import { Activity } from '../activities/activities-types';

export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const REMOVE_FAVOURITES = 'REMOVE_FAVOURITES';

export const addFavourite = (payload: Activity) => ({
  type: ADD_FAVOURITE,
  payload,
});

export const removeFavourite = (payload: string) => ({
  type: REMOVE_FAVOURITE,
  payload,
});

export const removeFavourites = () => ({
  type: REMOVE_FAVOURITES,
});
