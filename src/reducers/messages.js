import { LOAD_MSGS,ADD_MSG, } from '../actions/messages.js';



const messages = (state = {}, action) => {

  switch(action.type){
    case LOAD_MSGS:
      console.log("msg action: ", action.messages)
      return action.messages;

    case ADD_MSG:
      console.log("msg action: ", action.message)
      return action.message;
    default:
      return state
  }
}

export default messages;