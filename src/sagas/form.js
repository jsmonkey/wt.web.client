import { all, call, put, fork, takeLatest, takeEvery, select } from 'redux-saga/effects';

import { FormSelector } from '../selectors';
import { ActionTypes } from '../constants';
import { FormActions } from '../actions';


function* changeFieldValue({ payload: { formName, fieldName, value } }) {
  const { validators, asyncValidators } = yield select(FormSelector.getField, formName, fieldName);
  const errors = validators.map(validator => validator(value));
  const asyncErrors = yield all(asyncValidators.map(asyncValidator => asyncValidator(value)));
  const allErrors = [...errors, ...asyncErrors];
  yield put(FormActions.commitChangedValue(formName, fieldName, value, allErrors));
}

function* watchFieldChange() {
  yield takeLatest(ActionTypes.CHANGE_FIELD_VALUE, changeFieldValue);
}

function* formSagas() {
  yield all([
    fork(watchFieldChange),
  ]);
}

export default formSagas;
