import { State } from '../../../redux/types';
import mockActivities, { mockFavourites } from './activities-mock';

export const mockedState: State = {
  activities: mockActivities,
  randomActivity: mockActivities[3],
  randomActivityPanel: false,
  favourites: mockFavourites,
  favSlidePanel: false,
  auth: { nickname: 'Admin' },
};
