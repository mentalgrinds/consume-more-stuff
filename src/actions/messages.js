const axios = require('axios');

export const LOAD_MSGS = 'LOAD_MSGS';
export const ADD_MSG = 'ADD_MSG';


export const loadMessages = () => {
  return function(dispatch){
    return axios.get('/api/messages')
    .then( messages => {
      dispatch({
        type: LOAD_MSGS,
        messages: messages.data
      });
    });
  }
}

export const loadMsgByItem = (message) => {
  return function(dispatch){
    return axios.get(`/api/item/${message.id}`)
    .then (messages => {
      dispatch({
        type: LOAD_MSGS,
        messages: messages.data
      });
    });
  }
}

export const addMessage = (newMsg) => {
  console.log('32',newMsg)
  return function(dispatch){
    return axios.post('/api/messages', newMsg)
    .then( message => {
        console.log('32',message)
      dispatch({
        type: ADD_MSG,
        message: message.data
      });
    });
  }
}


