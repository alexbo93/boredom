import { Action } from 'redux';

import { AuthModel } from './auth-types';
import { ActionStandard } from '../types';
import { SET_USER, REMOVE_USER } from './auth-actions';

const initialState: AuthModel = {
  nickname: '',
};
const authReducer = (
  state: AuthModel = initialState,
  action: ActionStandard<string> | Action<string>,
) => {
  switch (action.type) {
    case SET_USER:
      return {
        nickname: (action as ActionStandard<string>).payload,
      };
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
