import { fork, call, all, takeLatest, put } from 'redux-saga/effects';
import { GET_ACTIVITIES, setActivities } from './activities-actions';

function* getActivities() {
  try {
    const apiClient = new apiClient();
    const response = yield call(apiClient.getActivities());

    const activities = yield call(getNormalizedActivities(response));
    yield put(setActivities(activities));
  } catch (error) {
    console.error('Failed on retrieving activities');
  }
}

function* getActivitiesSagas() {
  yield all([takeLatest(GET_ACTIVITIES, getActivities)]);
}

const activitiesSagas = [fork(getActivitiesSagas)];

export default activitiesSagas;
