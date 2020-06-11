import { ADD_ACTION, addAction, REMOVE_ACTION, removeAction, clearActions, CLEAR_ACTIONS } from './actionsActions';

describe('actions actions', () => {
  it('can create an ADD_ACTION action', () => {
    const action = addAction(['red', 4]);
    expect(action).toEqual({ type: ADD_ACTION, payload: ['red', 4] });
  });

  it('can create a REMOVE_ACTION action', () => {
    const action = removeAction(['red', 4]);
    expect(action).toEqual({ type: REMOVE_ACTION, payload: ['red', 4] });
  });

  it('can create a CLEAR_ACTIONS action', () => {
    const action = clearActions();
    expect(action).toEqual({ type: CLEAR_ACTIONS });
  });
});
