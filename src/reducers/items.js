import { LOAD_ITEMS } from '../actions/items';

const initialState = [];

const items = (state = initialState, action) => {
  switch(action.type){
    case LOAD_ITEMS:
      return [ ...action.items ];

    default:
      return state
  }
}

export default items;