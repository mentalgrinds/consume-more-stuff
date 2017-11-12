import { LOAD_ITEMSTATUSES, EDIT_ITEMSTATUSES } from '../actions/itemStatuses';

const initialState = [];

const itemStatuses = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ITEMSTATUSES:
      return [ ...action.itemStatuses ];
    case EDIT_ITEMSTATUSES:
      let index = state.findIndex((status) => {
        return status.id === action.status.id
      });
      /*console.log([ ...(state.slice(0, index)), action.status, ...(state.slice((index + 1), state.length))])*/
      return [ ...(state.slice(0, index)), action.status, ...(state.slice((index + 1), state.length))];
    default:
      return state
  }
}

export default itemStatuses;