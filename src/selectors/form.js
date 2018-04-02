export default {
  getForm: ({ forms }, formName) => forms[formName],
  getField: ({ forms }, formName, fieldName) => (forms[formName] ? forms[formName][fieldName] : null),
};

