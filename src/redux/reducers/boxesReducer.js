import { DISABLE_ROW, UNLOCK_LAST_BOX } from '../actions/boxActions';
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
  const boxArray = generateBoxArray(action.type, action.payload);
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
      return { ...state, unlockedRows: { ...state.unlockedRows, [action.payload]: true } };
    default: return state;
  }
}
