import { all, call, put, fork, take, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import { FormSelector } from '../selectors';
import { ActionTypes } from '../constants';
import { FormActions } from '../actions';

function* validateField(field) {
  const { validators, asyncValidators, value } = field;
  const errors = validators.map(validator => validator(value));
  const asyncErrors = yield all(asyncValidators.map(asyncValidator => asyncValidator(value)));
  return [...errors, ...asyncErrors];
}

function* validateForm(form) {
  const fields = Object.values(form.fields);
  const validations = fields.reduce((obj, field) => {
    obj[field.name] = call(validateField, field);
    return obj;
  }, {});
  const validationErrors = yield all(validations);
  return validationErrors;
}

function* validateFieldSaga({ payload: { formName, fieldName } }) {
  const field = yield select(FormSelector.getField, formName, fieldName);
  const errors = yield call(validateField, field);
  yield put(FormActions.setFieldValidationErrors(formName, fieldName, errors));
}

function* validateFormSaga({ payload: { formName } }) {
  const form = yield select(FormSelector.getForm, formName);
  const errors = yield call(validateForm, form);
  yield put(FormActions.setFormValidationErrors(formName, errors));
}

function* submitFormSaga({ payload: { formName, action, forward } }) {
  const form = yield select(FormSelector.getForm, formName);
  const errors = yield call(validateForm, form);
  if (Object.values(errors).some(err => err.length)) {
    yield put(FormActions.setFormValidationErrors(formName, errors));
  } else {
    const data = Object.values(form.fields).reduce((obj, field) => {
      obj[field.name] = field.value;
      return obj;
    }, {});
    try {
      yield axios.post(action, data);
      if (forward) {
        yield put(push(forward));
      }
    } catch (e) {

    }
  }
}


function* watchValidateField() {
  yield take(ActionTypes.VALIDATE_FIELD, validateFieldSaga);
}

function* watchValidateForm() {
  yield takeEvery(ActionTypes.VALIDATE_FORM, validateFormSaga);
}

function* watchSubmitForm() {
  yield takeEvery(ActionTypes.SUBMIT_FORM, submitFormSaga);
}

function* formSagas() {
  yield all([
    fork(watchValidateField),
    fork(watchValidateForm),
    fork(watchSubmitForm),
  ]);
}

export default formSagas;
