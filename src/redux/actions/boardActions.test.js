import { CHECK_RED, checkRed } from './boardActions';

describe('board action', () => {
  it('can create a CHECK_RED action', () => {
    const action = checkRed(2);
    expect(action).toEqual({ type: CHECK_RED, payload: 2 });
  });
});
