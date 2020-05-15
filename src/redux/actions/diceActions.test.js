import { ROLL_DICE, rollDice } from './diceActions';

describe('dice actions', () => {
  it('can create a roll dice action', () => {
    const action = rollDice();
    expect(action).toEqual({ type: ROLL_DICE });
  });
});
