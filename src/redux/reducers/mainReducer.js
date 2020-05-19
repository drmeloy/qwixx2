import { combineReducers } from 'redux';
import boxes from './boxesReducer';
import dice from './diceReducer';
import score from './scoreReducer';

export default combineReducers({
  boxes,
  dice,
  score
});
