import { INCREMENT_SCORE_RED, INCREMENT_SCORE_YELLOW, INCREMENT_SCORE_GREEN, INCREMENT_SCORE_BLUE, INCREMENT_SCORE_PENALTY } from '../../utils/reduxHelpers';
import { incrementScore } from './scoreActions';

describe('score actions', () => {
  it('can create an INCREMENT_SCORE_RED action', () => {
    const action = incrementScore('red', 4);
    expect(action).toEqual({ type: INCREMENT_SCORE_RED, payload: 4 });
  });

  it('can create an INCREMENT_SCORE_YELLOW action', () => {
    const action = incrementScore('yellow', 12);
    expect(action).toEqual({ type: INCREMENT_SCORE_YELLOW, payload: 12 });
  });

  it('can create an INCREMENT_SCORE_GREEN action', () => {
    const action = incrementScore('green', 8);
    expect(action).toEqual({ type: INCREMENT_SCORE_GREEN, payload: 8 });
  });

  it('can create an INCREMENT_SCORE_BLUE action', () => {
    const action = incrementScore('blue', 3);
    expect(action).toEqual({ type: INCREMENT_SCORE_BLUE, payload: 3 });
  });

  it('can create an INCREMENT_SCORE_PENALTY action', () => {
    const action = incrementScore('penalty');
    expect(action).toEqual({ type: INCREMENT_SCORE_PENALTY });
  });
});
