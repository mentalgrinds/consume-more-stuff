import { LOAD_ITEMS, ADD_ITEM, EDIT_ITEM, DELETE_ITEM } from '../actions/items';

//Note: edit item relies on receiving res.json of the item that was just edited. The return should be an array with the actual item object at [1]. I find the index of the item in the state, take the slices of the state around it not including it.

const initialState = [];

const items = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ITEMS:
      return [ ...action.items ];
    case ADD_ITEM:
      return [ ...state, action.item ];
    case EDIT_ITEM:
      let index = state.findIndex((item) => {
        return item.id === action.item[1].id
      });
      return [ ...(state.slice(0, index)), action.item[1], ...(state.slice((index + 1), state.length))];
      return
    default:
      return state
  }
}

export default items;