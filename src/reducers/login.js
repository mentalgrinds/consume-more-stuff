import { LOGIN_USER,CHECK_AUTH } from '../actions/login.js';

const initialState = [];

const loginUser = (state = initialState, action) => {
  console.log('loginUser dispatcher run')

  switch(action.type){
    case LOGIN_USER:
    console.log(action.user.data)
      return action.user.data;
    case CHECK_AUTH:
    console.log(action.user.data)
      return action.user.data;
    default:
      return state
  }
}

export default loginUser;