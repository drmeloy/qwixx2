import { DISABLE_ROW, UNLOCK_LAST_BOX, LOCK_LAST_BOX } from '../actions/boxActions';
import { generateBoxArray, CHECK_RED, CHECK_YELLOW, CHECK_GREEN, CHECK_BLUE, CHECK_PENALTY, reverseDictionary } from '../../utils/reduxHelpers';

const initialState = {
  red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
  blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
  penalties: 0,
  unlockedRows: {
    red: false,
    yellow: false,
    green: false,
    blue: false
  }
};

export default function reducer(state = initialState, action){
  const boxArray = generateBoxArray(action.type, action.payload, state.unlockedRows[reverseDictionary[action.type]]);
  const unlockedRow = color => {
    if(color === 'red' || color === 'yellow') return [...state[color], 12, 13];
    if(color === 'green' || color === 'blue') return [...state[color], 2, 1];
  };

  switch(action.type){
    case CHECK_RED: 
      return { ...state, red: boxArray };
    case CHECK_YELLOW:
      return { ...state, yellow: boxArray };
    case CHECK_GREEN:
      return { ...state, green: boxArray };
    case CHECK_BLUE:
      return { ...state, blue: boxArray };
    case CHECK_PENALTY:
      return { ...state, penalties: state.penalties + 1 };
    case DISABLE_ROW:
      return { ...state, [action.payload]: [] };
    case UNLOCK_LAST_BOX:
      return { ...state, [action.payload]: unlockedRow(action.payload), unlockedRows: { ...state.unlockedRows, [action.payload]: true } };
    case LOCK_LAST_BOX:
      return { ...state, [action.payload]: state[action.payload].slice(0, -2), unlockedRows: { ...state.unlockedRows, [action.payload]: false } };
    default: return state;
  }
}
