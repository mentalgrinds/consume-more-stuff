const axios = require('axios');

export const LOGIN = 'LOGIN';

export const checkAuth = () => {
  return function(dispatch){
    return axios.get('/api/users/login')
    .then( user => {
      dispatch({
        type: LOGIN,
        user: user.data
      });
    });
  }
}
