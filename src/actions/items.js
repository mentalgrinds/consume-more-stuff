const axios = require('axios');

export const LOAD_ITEMS = 'LOAD_ITEMS';

export const loadItems = () => {
  return function(dispatch){
    return axios.get('/api/items')
    .then( items => {
      dispatch({
        type: LOAD_ITEMS,
        items: items.data
      });
    });
  }
}