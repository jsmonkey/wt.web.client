import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import UserReducer from './user';
import FormsReducer from './form';

export default combineReducers({
  user: UserReducer,
  forms: FormsReducer,
  router: routerReducer,
});

