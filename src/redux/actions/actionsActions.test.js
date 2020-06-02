import { checkBox } from './boxActions';
import { ADD_ACTION, addAction, REMOVE_ACTION, removeAction } from './actionsActions';

describe('actions actions', () => {
  it('can create an ADD_ACTION action', () => {
    const action = addAction(['red', 4]);
    expect(action).toEqual({ type: ADD_ACTION, payload: ['red', 4] });
  });

  it('can create a REMOVE_ACTION action', () => {
    const action = removeAction(['red', 4]);
    expect(action).toEqual({ type: REMOVE_ACTION, payload: ['red', 4] });
  });
});
