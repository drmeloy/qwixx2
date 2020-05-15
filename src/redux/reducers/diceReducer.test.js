import { rollDice } from '../actions/diceActions';
import redcuer from './diceReducer';

describe('dice reducer', () => {
  it('can handle a roll dice action', () => {
    const initialState = {
      whiteDie1: 1,
      whiteDie2: 1,
      redDie: 1,
      yellowDie: 1,
      greenDie: 1,
      blueDie: 1
    };
    const action = rollDice();
    const newState = redcuer(initialState, action);
    expect(newState.whiteDie1).toBeGreaterThanOrEqual(1);
    expect(newState.whiteDie1).toBeLessThanOrEqual(6);
    expect(newState.whiteDie2).toBeGreaterThanOrEqual(1);
    expect(newState.whiteDie2).toBeLessThanOrEqual(6);
    expect(newState.redDie).toBeGreaterThanOrEqual(1);
    expect(newState.redDie).toBeLessThanOrEqual(6);
    expect(newState.yellowDie).toBeGreaterThanOrEqual(1);
    expect(newState.yellowDie).toBeLessThanOrEqual(6);
    expect(newState.greenDie).toBeGreaterThanOrEqual(1);
    expect(newState.greenDie).toBeLessThanOrEqual(6);
    expect(newState.blueDie).toBeGreaterThanOrEqual(1);
    expect(newState.blueDie).toBeLessThanOrEqual(6);
  });
});
