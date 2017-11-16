import { LOAD_USERS, ADD_USER, EDIT_USER, EDIT_PASSWORD,ADD_QUES,RESET_PASSWORD } from '../actions/users';

const initialState = [];

const users = (state = initialState, action) => {
  switch(action.type){
    case LOAD_USERS:
      return [ ...action.users ];
    case ADD_USER:
      return [ ...state, action.user ];
    case EDIT_USER:
    console.log(action.user);
      let index = state.findIndex((user) => {
        return user.id === action.user.id
      });
      console.log([ ...(state.slice(0, index)), action.user, ...(state.slice((index + 1), state.length))])
      return [ ...(state.slice(0, index)), action.user, ...(state.slice((index + 1), state.length))];
    case EDIT_PASSWORD:
      let local = {};
      if(action.user.data === parseInt(localStorage.userId)){
        localStorage.setItem('passwordUpdated', true);
        return local.updated = true;
      }
        localStorage.setItem('passwordError', true);

      return null;
    case RESET_PASSWORD:
      if(action.user.data){
        localStorage.setItem('resetSuccess', true);
      }
      else{
        localStorage.setItem('resetError', true);
      }

      return null;
    default:
      return state
  }
}

export default users;