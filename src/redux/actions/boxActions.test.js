import { CHECK_RED, checkRed, CHECK_YELLOW, checkYellow, CHECK_GREEN, checkGreen, CHECK_BLUE, checkBlue, CHECKK_PENALTY, checkPenalty } from './boxActions';

describe('board action', () => {
  it('can create a CHECK_RED action', () => {
    const action = checkRed(2);
    expect(action).toEqual({ type: CHECK_RED, payload: 2 });
  });

  it('can create a CHECK_YELLOW action', () => {
    const action = checkYellow(4);
    expect(action).toEqual({ type: CHECK_YELLOW, payload: 4 });
  });

  it('can create a CHECK_GREEN action', () => {
    const action = checkGreen(11);
    expect(action).toEqual({ type: CHECK_GREEN, payload: 11 });
  });

  it('can create a CHECK_BLUE action', () => {
    const action = checkBlue(12);
    expect(action).toEqual({ type: CHECK_BLUE, payload: 12 });
  });

  it('can create a CHECK_PENALTY action', () => {
    const action = checkPenalty();
    expect(action).toEqual({ type: CHECKK_PENALTY});
  });
});
