import { AuthModel } from './auth-types';
import { ActionStandard } from '../types';

const initialState: AuthModel = {
  nickname: '',
};
const authReducer = (
  state: AuthModel = initialState,
  action: ActionStandard<string>,
) => {
  return state;
};

export default authReducer;
