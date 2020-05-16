import { call, all, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_RANDOM_ACTIVITY,
  setRandomActivity,
} from './random-activity-actions';

import { ApiClient } from 'services/api-client';

function* getRandomActivitySaga() {
  try {
    const apiClient = new ApiClient();
    const activity = yield call(apiClient.getRandomActivity);

    yield put(setRandomActivity(activity));
  } catch (error) {
    console.error('Failed on retrieving activity', error);
  }
}

function* randomActivitySagas() {
  yield all([takeLatest(GET_RANDOM_ACTIVITY, getRandomActivitySaga)]);
}

const randomActivity = [fork(randomActivitySagas)];

export default randomActivity;
