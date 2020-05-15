import { Activities } from './activities-types';
import { ActionStandard } from '../types';

const initialState: Activities = {};
const ActivitiesReducer = (
  state: Activities = initialState,
  action: ActionStandard<Activities>,
) => {
  return state;
};

export default ActivitiesReducer;
