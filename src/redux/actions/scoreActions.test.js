import { INCREMENT_SCORE_RED } from './scoreActions';

describe('score actions', () => {
  it('can create a INCREMENT_SCORE_RED action', () => {
    const action = addScore('red', 4);
    expect(action).toEqual({ type: INCREMENT_SCORE_RED });
  });
});
