import { LOGIN_USER,CHECK_AUTH } from '../actions/login.js';

const initialState = [];

const loginUser = (state = initialState, action) => {
  console.log('loginUser dispatcher run')

  switch(action.type){
    case LOGIN_USER:
    console.log(action.user)
      return action.user;
    default:
      return state
  }
}

export default loginUser;