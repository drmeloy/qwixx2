import { ROLL_DICE } from '../actions/diceActions';
import { generateRandomNumber } from '../helpers/reduxHelpers';

const initialState = {
  whiteDie1: 0,
  whiteDie2: 0,
  redDie: 0,
  yellowDie: 0,
  greenDie: 0,
  blueDie: 0
};

export default function redcuer(state = initialState, action){
  switch(action.type){
    case ROLL_DICE:
      return { ...state,
        whiteDie1: generateRandomNumber(1, 6),
        whiteDie2: generateRandomNumber(1, 6),
        redDie: generateRandomNumber(1, 6),
        yellowDie: generateRandomNumber(1, 6),
        greenDie: generateRandomNumber(1, 6),
        blueDie: generateRandomNumber(1, 6)
      };
    default: return state;
  }
}
