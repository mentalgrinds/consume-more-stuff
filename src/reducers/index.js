import { combineReducers } from 'redux';

import items from './items';
import users from './users';
import categories from './categories';
import conditions from './conditions';
import itemStatuses from './itemStatuses';
import loginUser from './login';
import messages from './messages';

export default combineReducers({
  items,
  users,
  categories,
  conditions,
  itemStatuses,
  loginUser,
  messages
});