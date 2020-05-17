import { Action } from 'redux';

import {
  SET_FAVS_VISIBLE,
  SET_FAVS_INVISIBLE,
} from './fav-slide-panel-actions';

const initialState = false;
const favSlidePanelReducer = (
  state: boolean = initialState,
  action: Action,
) => {
  switch (action.type) {
    case SET_FAVS_VISIBLE:
      return true;
    case SET_FAVS_INVISIBLE:
      return false;
    default:
      return state;
  }
};

export default favSlidePanelReducer;
