import { put, all, takeLatest, fork } from 'redux-saga/effects';

import { removeUser, LOGOUT } from './auth-actions';
import { removeFavourites } from 'redux/favourites';

function* logout() {
  try {
    yield put(removeUser());
    yield put(removeFavourites());
  } catch (error) {
    console.error('Logout failed');
  }
}

function* authenticationSagas() {
  yield all([takeLatest(LOGOUT, logout)]);
}

const authentication = [fork(authenticationSagas)];

export default authentication;
