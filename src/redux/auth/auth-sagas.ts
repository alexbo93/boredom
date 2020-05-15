import { put, call, all, takeLatest, fork } from 'redux-saga/effects';

import { setUser, LOGIN, removeUser, LOGOUT } from './auth-actions';
import { ActionStandard } from '../types';

function* login(action: ActionStandard<string>) {
  try {
    const nick = action.payload;
    yield put(setUser(nick));
    // store in localStorage
  } catch (error) {
    console.error('authentication failed');
  }
}

function* logout() {
  try {
    yield put(removeUser());
    // remove data from localStorage
  } catch (error) {
    console.error('Logout failed');
  }
}

function* authenticationSagas() {
  yield all([takeLatest(LOGIN, login)]);
  yield all([takeLatest(LOGOUT, logout)]);
}

const authentication = [fork(authenticationSagas)];

export default authentication;
