import { ActionTypes } from '../constants';

const initialState = {
};

const handleFormInit = (state, { formName, action, forward }) => (state[formName] ? state : {
  ...state,
  [formName]: {
    meta: {
      name: formName,
      action,
      forward,
    },
    fields: {},
  },
});

const handleFieldInit = (state, {
  fieldName, formName, validators, asyncValidators,
}) => {
  let form = state[formName];
  let newState = state;
  if (!form) {
    newState = handleFormInit(state, {
      meta: {
        name: formName,
      },
      fields: {},
    });
    form = newState[formName];
  }
  const { fields } = form;
  return {
    ...newState,
    [formName]: {
      ...form,
      fields: {
        ...fields,
        [fieldName]: {
          name: fieldName, validators, asyncValidators,
        },
      },
    },
  };
};

const handleChangeFieldValue = (state, { formName, fieldName, value }) => {
  const form = state[formName];
  const { fields } = form;
  const field = fields[fieldName];
  return {
    ...state,
    [formName]: {
      ...form,
      fields: {
        ...fields,
        [fieldName]: {
          ...field,
          value,
        },
      },
    },
  };
};

const handleFieldValidationErrors = (state, { formName, fieldName, errors }) => {
  const form = state[formName];
  const { fields } = form;
  const field = fields[fieldName];
  return {
    ...state,
    [formName]: {
      ...form,
      fields: {
        ...fields,
        [fieldName]: {
          ...field,
          errors,
        },
      },
    },
  };
};

const handleFormValidationErrors = (state, { formName, errors }) => {
  const form = state[formName];
  const { fields } = form;
  const newFormState = {
    ...form,
    fields: {
      ...Object.keys(errors).reduce((obj, key) => {
        obj[key] = { ...obj[key], errors: errors[key] };
        return obj;
      }, fields),
    },
  };
  return { ...state, [formName]: newFormState };
};


const FormReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INIT_FORM:
      return handleFormInit(state, action.payload);
    case ActionTypes.INIT_FIELD:
      return handleFieldInit(state, action.payload);
    case ActionTypes.CHANGE_FIELD_VALUE:
      return handleChangeFieldValue(state, action.payload);
    case ActionTypes.SET_FIELD_VALIDATION_ERRORS:
      return handleFieldValidationErrors(state, action.payload);
    case ActionTypes.SET_FROM_VALIDATION_ERRORS:
      return handleFormValidationErrors(state, action.payload);
    default:
      return state;
  }
};

export default FormReducer;
