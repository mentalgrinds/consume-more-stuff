import { LOGIN_USER,LOGOUT_USER, } from '../actions/login.js';

const initialState = [];

const loginUser = (state = initialState, action) => {
  console.log('loginUser dispatcher run')

  switch(action.type){
    case LOGIN_USER:
    console.log("login action: ", action.user)
    localStorage.setItem('username', action.user.username);
    localStorage.setItem('userId', action.user.id);
      return action.user;
    case LOGOUT_USER:
    console.log(action.user)

      return null;
    default:
      return state
  }
}

export default loginUser;