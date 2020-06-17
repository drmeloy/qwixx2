import { DISABLE_ROW, disableRow, checkBox, unlockLastBox, UNLOCK_LAST_BOX, lockLastBox, LOCK_LAST_BOX } from './boxActions';
import { CHECK_RED, CHECK_YELLOW, CHECK_GREEN, CHECK_BLUE, CHECK_PENALTY } from '../../utils/reduxHelpers';

describe('board action', () => {
  it('can create a CHECK_BOX action', () => {
    expect(checkBox('red', 4)).toEqual({ type: CHECK_RED, payload: 4 });
    expect(checkBox('yellow', 2)).toEqual({ type: CHECK_YELLOW, payload: 2 });
    expect(checkBox('green', 8)).toEqual({ type: CHECK_GREEN, payload: 8 });
    expect(checkBox('blue', 12)).toEqual({ type: CHECK_BLUE, payload: 12 });
    expect(checkBox('penalty')).toEqual({ type: CHECK_PENALTY });
  });

  
  it('can create a DISABLE_ROW action', () => {
    const action = disableRow('red');
    expect(action).toEqual({ type: DISABLE_ROW, payload: 'red' });
  });

  it('can create a UNLOCK_LAST_BOX action', () => {
    const action = unlockLastBox('red');
    expect(action).toEqual({ type: UNLOCK_LAST_BOX, payload: 'red' });
  });

  it('can create a LOCK_LAST_BOX action', () => {
    const action = lockLastBox('red');
    expect(action).toEqual({ type: LOCK_LAST_BOX, payload: 'red' });
  });
});
