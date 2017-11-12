const axios = require('axios');

export const LOAD_ITEMSTATUSES = 'LOAD_ITEMSTATUS';
export const EDIT_ITEMSTATUSES = 'EDIT_ITEMSTATUSES';

export const loadItemStatuses = () => {
  return function(dispatch){
    return axios.get('/api/itemStatus')
    .then( itemStatuses => {
      dispatch({
        type: LOAD_ITEMSTATUSES,
        itemStatuses: itemStatuses.data
      });
    });
  }
}

export const editItemStatuses = (newInfo) => {
  return function(dispatch){
    return axios.put(`/api/itemStatus/${newInfo.id}`, newInfo)
    .then( itemStatuses => {
      dispatch({
        type: EDIT_ITEMSTATUSES,
        itemStatuses: itemStatuses.data
      });
    });
  }
}
