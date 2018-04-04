import { ActionTypes } from '../constants';

export default {
  initForm: (formName, action, forward) => ({
    type: ActionTypes.INIT_FORM,
    payload: { formName, action, forward },
  }),
  initField: (formName, fieldName, validators, asyncValidators) => ({
    type: ActionTypes.INIT_FIELD,
    payload: {
      formName, fieldName, validators, asyncValidators,
    },
  }),
  changeFieldValue: (formName, fieldName, value) => ({
    type: ActionTypes.CHANGE_FIELD_VALUE,
    payload: { formName, fieldName, value },
  }),
  validateField: (formName, fieldName) => ({
    type: ActionTypes.VALIDATE_FIELD,
    payload: { formName, fieldName },
  }),
  setFieldValidationErrors: (formName, fieldName, errors) => ({
    type: ActionTypes.SET_FIELD_VALIDATION_ERRORS,
    payload: { formName, fieldName, errors },
  }),
  validateForm: formName => ({
    type: ActionTypes.VALIDATE_FORM,
    payload: { formName },
  }),
  setFormValidationErrors: (formName, errors) => ({
    type: ActionTypes.SET_FROM_VALIDATION_ERRORS,
    payload: { formName, errors },
  }),
  submitForm: (formName, action, forward) => ({
    type: ActionTypes.SUBMIT_FORM,
    payload: { formName, action, forward },
  }),
};

