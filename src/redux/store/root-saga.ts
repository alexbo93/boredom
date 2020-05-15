import { all } from 'redux-saga/effects';

import { activitiesSagas } from '../activities';
import { authSagas } from '../auth';
import { randomActivitySagas } from '../random-activity';

export default function* rootSagas() {
  yield all([...activitiesSagas, ...authSagas, ...randomActivitySagas]);
}
