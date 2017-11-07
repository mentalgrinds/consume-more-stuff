import { LOAD_USERS, ADD_USER} from '../actions/users';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return [ ...action.users ];
    case ADD_USER:
      return [ ...state, action.user ];
    default:
      return state
  }
}

export default users;