import reducer from './actionsReducer';
import { addAction, removeAction, clearActions } from '../actions/actionsActions';

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
    const newState2 = reducer(fullState, removeAction(['blue', 8]));
    expect(newState2).toEqual([['red', 4]]);
    const allBlues = [['blue', 10], ['blue', 8]];
    const noTen = reducer(allBlues, removeAction(['blue', 10]));
    expect(noTen).toEqual([['blue', 8]]);
    const noEight = reducer(allBlues, removeAction(['blue', 8]));
    expect(noEight).toEqual([['blue', 10]]);
  });

  it('handles removeAction on something not present in state', () => {
    const fullState = [['red', 4], ['blue', 8]];
    const newState = reducer(fullState, removeAction(['green', 12]));
    expect(newState).toEqual(fullState);
  });

  it('handles a clearActions action', () => {
    const fullState = [['red', 4], ['blue', 8]];
    const newState = reducer(fullState, clearActions());
    expect(newState).toEqual([]);
  });
});
