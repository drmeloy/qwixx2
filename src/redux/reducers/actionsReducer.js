import { ADD_ACTION, REMOVE_ACTION, CLEAR_ACTIONS } from '../actions/actionsActions';

const initialState = [];

export default function reducer(state = initialState, action){
  switch(action.type){
    case ADD_ACTION:
      if(state.length === 2) return [...state];
      return [...state, action.payload];
    case REMOVE_ACTION:
      if(state.length === 2 && JSON.stringify(state[0]) === JSON.stringify(action.payload)) return [state[1]];
      else if(state.length === 2 && JSON.stringify(state[1]) === JSON.stringify(action.payload)) return [state[0]];
      else if(state.length === 1 && JSON.stringify(state[0]) === JSON.stringify(action.payload)) return [];
      else return state;
    case CLEAR_ACTIONS:
      return [];
    default: return state;
  }
}
