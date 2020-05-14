import { DISABLE_ROW, disableRow, checkBox } from './boxActions';
import { CHECK_RED, CHECK_YELLOW, CHECK_GREEN, CHECK_BLUE, CHECK_PENALTY } from '../helpers/reduxHelpers';

describe('board action', () => {
  it('can create a CHECK_RED action', () => {
    const action = checkBox('red', 2);
    expect(action).toEqual({ type: CHECK_RED, payload: 2 });
  });

  it('can create a CHECK_YELLOW action', () => {
    const action = checkBox('yellow', 4);
    expect(action).toEqual({ type: CHECK_YELLOW, payload: 4 });
  });

  it('can create a CHECK_GREEN action', () => {
    const action = checkBox('green', 11);
    expect(action).toEqual({ type: CHECK_GREEN, payload: 11 });
  });

  it('can create a CHECK_BLUE action', () => {
    const action = checkBox('blue', 12);
    expect(action).toEqual({ type: CHECK_BLUE, payload: 12 });
  });

  it('can create a CHECK_PENALTY action', () => {
    const action = checkBox('penalty');
    expect(action).toEqual({ type: CHECK_PENALTY });
  });

  it('can create a DISABLE_ROW action', () => {
    const action = disableRow('red');
    expect(action).toEqual({ type: DISABLE_ROW, payload: 'red' });
  });

  it('can create a CHECK_BOX action', () => {
    expect(checkBox('red', 4)).toEqual({ type: CHECK_RED, payload: 4 });
    expect(checkBox('yellow', 2)).toEqual({ type: CHECK_YELLOW, payload: 2 });
    expect(checkBox('green', 8)).toEqual({ type: CHECK_GREEN, payload: 8 });
    expect(checkBox('blue', 12)).toEqual({ type: CHECK_BLUE, payload: 12 });
    expect(checkBox('penalty')).toEqual({ type: CHECK_PENALTY });
  });
});
