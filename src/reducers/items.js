import { LOAD_ITEMS, ADD_ITEM } from '../actions/items';

const initialState = [];

const items = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ITEMS:
      return [ ...action.items ];
    case ADD_ITEM:
      return [ ...state, action.item ];
    default:
      return state
  }
}

export default items;