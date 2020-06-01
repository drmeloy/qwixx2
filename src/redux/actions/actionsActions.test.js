import { checkBox } from './boxActions';
import { ADD_ACTION, addAction, REMOVE_ACTION, removeAction } from './actionsActions';

describe('actions actions', () => {
  it('can create an ADD_ACTION action', () => {
    const action = addAction(checkBox('red', 4));
    expect(action).toEqual({ type: ADD_ACTION, payload: checkBox('red', 4) });
  });

  it('can create a REMOVE_ACTION action', () => {
    const action = removeAction(checkBox('red', 4));
    expect(action).toEqual({ type: REMOVE_ACTION, payload: checkBox('red', 4) });
  });
});
