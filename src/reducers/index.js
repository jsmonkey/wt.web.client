import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './user';

export default combineReducers({
  user: UserReducer,
  form: formReducer,
  router: routerReducer,
});

