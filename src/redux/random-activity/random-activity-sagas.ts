import { call, all, takeLatest, put, fork } from 'redux-saga/effects';
import {
  GET_RANDOM_ACTIVITY,
  setRandomActivity,
} from './random-activity-actions';

function* getRandomActivitySaga() {
  try {
    const apiClient = new apiClient();
    const activity = yield call(apiClient.getRandomActivity());

    yield put(setRandomActivity(activity));
  } catch (error) {
    console.error('Failed on retrieving activities');
  }
}

function* randomActivitySagas() {
  yield all([takeLatest(GET_RANDOM_ACTIVITY, getRandomActivitySaga)]);
}

const randomActivity = [fork(randomActivitySagas)];

export default randomActivity;
