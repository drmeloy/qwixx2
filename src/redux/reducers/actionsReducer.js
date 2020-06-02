import { ADD_ACTION, REMOVE_ACTION, CLEAR_ACTIONS } from '../actions/actionsActions';

const initialState = [];

export default function reducer(state = initialState, action){
  switch(action.type){
    case ADD_ACTION:
      if(state.length === 2) return [...state];
      return [...state, action.payload];
    case REMOVE_ACTION:
      return state.filter(item => item[0] !== action.payload[0] && item[1] !== action.payload[1]);
    case CLEAR_ACTIONS:
      return [];
    default: return state;
  }
}
