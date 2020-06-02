import reducer from './actionsReducer';
import { addAction, removeAction } from '../actions/actionsActions';

describe('actions reducer', () => {
  const initialState = [];

  it('handles an addAction action', () => {
    const newState = reducer(initialState, addAction(['red', 4]));
    expect(newState).toEqual([['red', 4]]);
    const newState1 = reducer(newState, addAction(['blue', 8]));
    expect(newState1).toEqual([['red', 4], ['blue', 8]]);
  });

  it('won\'t add more than two actions', () => {
    const fullState = [['red', 4], ['blue', 8]];
    const newState = reducer(fullState, addAction(['green', 9]));
    expect(newState).toEqual(fullState);
  });

  it('handles a removeAction action', () => {
    const fullState = [['red', 4], ['blue', 8]];
    const newState = reducer(fullState, removeAction(['red', 4]));
    expect(newState).toEqual([['blue', 8]]);
    const newState1 = reducer(newState, removeAction(['blue', 8]));
    expect(newState1).toEqual([]);
  });

  it('handles removeAction on something not present in state', () => {
    const fullState = [['red', 4], ['blue', 8]];
    const newState = reducer(fullState, removeAction(['green', 12]));
    expect(newState).toEqual(fullState);
  });
});
