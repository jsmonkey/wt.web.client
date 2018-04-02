import { ActionTypes } from '../constants';

export default {
  signin: (fields, meta) => ({
    type: ActionTypes.SIGN_IN,
    payload: fields,
    meta,
  }),
};
