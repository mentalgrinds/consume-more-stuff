const axios = require('axios');

export const LOGIN_USER = 'LOGIN_USER';

export const loginUser = (newUser) => {
  console.log(newUser);
  return function(dispatch){
    return axios.post('/api/users/login',newUser)
    .then( user => {
      console.log('user from then', user)
      dispatch({
        type: LOGIN_USER,
        user: user.data
      });
    });
  }
}


