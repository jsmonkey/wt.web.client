import { all, call, put, fork, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { ActionTypes } from '../constants';


function* signIn() {

}

function* watchSignIn() {
  yield takeLatest(ActionTypes.SIGN_IN, signIn);
}

function* authSagas() {
  yield all([
    fork(watchSignIn),
  ]);
}
