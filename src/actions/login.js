const axios = require('axios');

export const LOGIN = 'LOGIN';

export const checkAuth = (newUser) => {
  console.log(newUser);
  return function(dispatch){
    return axios.post('/api/users/login',newUser)
    .then( user => {
      dispatch({
        type: LOGIN,
        user: user
      });
    });
  }
}
