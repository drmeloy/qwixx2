import { INCREMENT_SCORE_RED, scoreArray, INCREMENT_SCORE_YELLOW, INCREMENT_SCORE_GREEN, INCREMENT_SCORE_BLUE, INCREMENT_SCORE_PENALTY, penaltyScoreArray } from '../../utils/reduxHelpers';

const initialState = {
  redIndex: 0,
  redScore: 0,
  yellowIndex: 0,
  yellowScore: 0,
  greenIndex: 0,
  greenScore: 0,
  blueIndex: 0,
  blueScore: 0,
  penaltyIndex: 0,
  penaltyScore: 0
};

export default function reducer(state = initialState, action){
  let indexStep;
  if(action.type === INCREMENT_SCORE_RED || action.type === INCREMENT_SCORE_YELLOW) indexStep = action.payload < 12 ? 1 : 2;
  else if(action.type === INCREMENT_SCORE_GREEN || action.type === INCREMENT_SCORE_BLUE) indexStep = action.payload > 2 ? 1 : 2;
  
  switch(action.type){
    case INCREMENT_SCORE_RED:
      return { ...state, redIndex: state.redIndex + indexStep, redScore: scoreArray[state.redIndex + indexStep] };
    case INCREMENT_SCORE_YELLOW:
      return { ...state, yellowIndex: state.yellowIndex + indexStep, yellowScore: scoreArray[state.yellowIndex + indexStep] };
    case INCREMENT_SCORE_GREEN:
      return { ...state, greenIndex: state.greenIndex + indexStep, greenScore: scoreArray[state.greenIndex + indexStep] };
    case INCREMENT_SCORE_BLUE:
      return { ...state, blueIndex: state.blueIndex + indexStep, blueScore: scoreArray[state.blueIndex + indexStep] };
    case INCREMENT_SCORE_PENALTY:
      return { ...state, penaltyIndex: state.penaltyIndex + 1, penaltyScore: penaltyScoreArray[state.penaltyIndex + 1] };
    default: return state;
  }
}
