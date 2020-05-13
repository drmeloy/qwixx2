import { CHECK_RED, CHECK_YELLOW, CHECK_GREEN, CHECK_BLUE, CHECKK_PENALTY } from '../actions/boxActions';

const initialState = {
  red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  penalties: 0
};

const generateBoxArray = num => {
  const array = [];
  for(let i = num + 1; i < 13; i++) array.push(i);
  return array;
};

export default function reducer(state = initialState, action){
  const boxArray = generateBoxArray(action.payload);
  switch(action.type){
    case CHECK_RED: 
      return { ...state, red: boxArray };
    case CHECK_YELLOW:
      return { ...state, yellow: boxArray };
    case CHECK_GREEN:
      return { ...state, green: boxArray };
    case CHECK_BLUE:
      return { ...state, blue: boxArray };
    case CHECKK_PENALTY:
      return { ...state, penalties: state.penalties + 1 };
  }
}