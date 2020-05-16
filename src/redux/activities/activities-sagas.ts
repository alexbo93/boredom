import { fork, call, all, takeLatest, put } from 'redux-saga/effects';
import { GET_ACTIVITIES, setActivities } from './activities-actions';

import { ApiClient } from 'services/api-client';
import ActivityNormalizer from 'services/activity-normalizer';

function* getActivities() {
  try {
    const apiClient = new ApiClient();
    console.log('apiClient: ', apiClient);
    const response = yield call(apiClient.getActivities);

    const activities = yield call(ActivityNormalizer.normalize, response);
    yield put(setActivities(activities));
  } catch (error) {
    console.error('Failed on retrieving activities', error);
  }
}

function* getActivitiesSagas() {
  yield all([takeLatest(GET_ACTIVITIES, getActivities)]);
}

const activitiesSagas = [fork(getActivitiesSagas)];

export default activitiesSagas;
