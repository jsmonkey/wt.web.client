import { ActionTypes } from '../constants';

const initialState = {
};

const handleFormInit = (state, { formName }) => (state[formName] ? state : { ...state, [formName]: {} });

const handleFieldInit = (state, {
  fieldName, formName, validators, asyncValidators,
}) => {
  let form = state[formName];
  let newState = state;
  if (!form) {
    newState = handleFormInit(state, { formName });
    form = newState[formName];
  }
  return {
    ...newState,
    [formName]: {
      ...form,
      [fieldName]: {
        name: fieldName, validators, asyncValidators,
      },
    },
  };
};

const handleFieldValueCommit = (state, {
  formName, fieldName, value, errors,
}) => {
  const form = state[formName];
  const field = form[fieldName];
  return {
    ...state,
    [formName]: {
      ...form,
      [fieldName]: {
        ...field,
        value,
        errors,
      },
    },
  };
};


const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_FORM:
      return handleFormInit(state, action.payload);
    case ActionTypes.INIT_FIELD:
      return handleFieldInit(state, action.payload);
    case ActionTypes.COMMIT_CHANGED_VALUE:
      return handleFieldValueCommit(state, action.payload);
    default:
      return state;
  }
};

export default FormReducer;
