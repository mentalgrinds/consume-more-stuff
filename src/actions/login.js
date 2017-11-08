const axios = require('axios');

export const LOGIN_USER = 'LOGIN_USER';
export const CHECK_AUTH = 'CHECK_AUTH';

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

export const checkAuth = () => {
  return function(dispatch){
    return axios.get('/api/users/login')
    .then( user => {
      dispatch({
        type: CHECK_AUTH,
        user: user
      });
    });
  }
}
