import { ActionTypes } from '../constants';

export default {
  initForm: formName => ({
    type: ActionTypes.INIT_FORM,
    payload: { formName },
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
  commitChangedValue: (formName, fieldName, value, errors) => ({
    type: ActionTypes.COMMIT_CHANGED_VALUE,
    payload: {
      formName, fieldName, value, errors,
    },
  }),
};

