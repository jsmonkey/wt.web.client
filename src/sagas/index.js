import { fork, all } from 'redux-saga/effects';

import userSaga from './user';
import formSaga from './form';

export default function* () {
  yield all([
    fork(formSaga),
    fork(userSaga),
  ]);
}
