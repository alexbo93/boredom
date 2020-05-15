import {
  SET_RANDOM_ACTIVITY,
  REMOVE_RANDOM_ACTIVITY,
} from './random-activity-actions';
import { Activity } from '../activities/activities-types';
import { ActionStandard } from '../types';

const initialState: Activity | null = null;
const randomActivityReducer = (
  state: Activity | null = initialState,
  action: ActionStandard<Activity>,
) => {
  switch (action.type) {
    case SET_RANDOM_ACTIVITY:
      return action.payload;
    case REMOVE_RANDOM_ACTIVITY:
      return initialState;
    default:
      return state;
  }
};

export default randomActivityReducer;
