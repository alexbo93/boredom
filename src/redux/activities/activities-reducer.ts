import { Activities } from './activities-types';
import { ActionStandard } from '../types';
import { SET_ACTIVITIES } from './activities-actions';

const initialState: Activities = {};
const ActivitiesReducer = (
  state: Activities = initialState,
  action: ActionStandard<Activities>,
) => {
  if (action.type === SET_ACTIVITIES) {
    return action.payload;
  }
  return state;
};

export default ActivitiesReducer;
