const axios = require('axios');

export const LOAD_ITEMS = 'LOAD_ITEMS';
export const ADD_ITEM = 'ADD_ITEM';

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

export const addItem = (newItem) => {
  return function(dispatch){
    return axios.post('/api/items', newItem)
    .then( item => {
      dispatch({
        type: ADD_ITEM,
        item: item.data
      });
    });
  }
}