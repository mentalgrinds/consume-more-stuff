import { LOAD_MSGS,ADD_MSG, } from '../actions/messages.js';



const messages = (state = [], action) => {

  switch(action.type){
    case LOAD_MSGS:
      let id = localStorage.userId;
      let count = action.messages.filter((elem)=>{
        return elem.senderId === parseInt(id)
      })   
      localStorage.setItem('msgCount', count.length);
      return action.messages;

    case ADD_MSG:
    console.log(state)
      return [...state,action.message];
    default:
      return state;
  }
}

export default messages;