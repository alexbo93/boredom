import { all } from 'redux-saga/effects';

import { activitiesSagas } from '../activities';
import { authSagas } from '../auth';

export default function* rootSagas() {
  yield all([...activitiesSagas, ...authSagas]);
}
