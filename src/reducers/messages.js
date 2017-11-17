import { LOAD_MSGS,ADD_MSG, } from '../actions/messages.js';



const messages = (state = [], action) => {

  switch(action.type){
    case LOAD_MSGS:
      return action.messages;

    case ADD_MSG:
    console.log(state)
      return [...state,action.message];
    default:
      return state;
  }
}

export default messages;