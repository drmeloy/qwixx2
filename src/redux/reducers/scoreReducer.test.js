import reducer from './scoreReducer';
import { incrementScore } from '../actions/scoreActions';

describe('score reducer', () => {
  it('handles an incrementScore(red) action', () => {
    const initialState = { redIndex: 0, redScore: 0 };
    const newState = reducer(initialState, incrementScore('red', 4));
    expect(newState).toEqual({ redIndex: 1, redScore: 1 });
  });

  it('handles an incrementScore(yellow) action', () => {
    const initialState = { yellowIndex: 3, yellowScore: 6 };
    const newState = reducer(initialState, incrementScore('yellow', 8));
    expect(newState).toEqual({ yellowIndex: 4, yellowScore: 10 });
  });

  it('handles an incrementScore(green) action', () => {
    const initialState = { greenIndex: 5, greenScore: 15 };
    const newState = reducer(initialState, incrementScore('green', 9));
    expect(newState).toEqual({ greenIndex: 6, greenScore: 21 });
  });

  it('handles an incrementScore(blue) action', () => {
    const initialState = { blueIndex: 9, blueScore: 45 };
    const newState = reducer(initialState, incrementScore('blue', 9));
    expect(newState).toEqual({ blueIndex: 10, blueScore: 55 });
  });

  it('handles an incrementScore(penalty) action', () => {
    const initialState = { penaltyIndex: 0, penaltyScore: 0 };
    const newState = reducer(initialState, incrementScore('penalty'));
    expect(newState).toEqual({ penaltyIndex: 1, penaltyScore: -5 });
    
    const initialState2 = { penaltyIndex: 3, penaltyScore: -15 };
    const newState2 = reducer(initialState2, incrementScore('penalty'));
    expect(newState2).toEqual({ penaltyIndex: 4, penaltyScore: -20 });
  });

  it('increases a row score index by 2 if the payload is 12', () => {
    const initialState = { redIndex: 7, redScore: 28 };
    const newState = reducer(initialState, incrementScore('red', 12));
    expect(newState).toEqual({ redIndex: 9, redScore: 45 });
  });
});
