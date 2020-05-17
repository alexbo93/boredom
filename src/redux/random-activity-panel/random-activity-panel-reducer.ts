import { Action } from 'redux';

import {
  SET_RANDOM_VISIBLE,
  SET_RANDOM_INVISIBLE,
} from './random-activity-panel-actions';

const initialState = false;
const randomPanelReducer = (state: boolean = initialState, action: Action) => {
  switch (action.type) {
    case SET_RANDOM_VISIBLE:
      return true;
    case SET_RANDOM_INVISIBLE:
      return false;
    default:
      return state;
  }
};

export default randomPanelReducer;
