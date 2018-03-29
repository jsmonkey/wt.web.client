import { ActionTypes } from '../constants';

const initialState = {
  isSignedIn: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default UserReducer;
