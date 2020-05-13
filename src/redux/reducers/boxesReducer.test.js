import { checkRed } from '../actions/boxActions';
import reducer from './boxesReducer';

describe('boxes reducer', () => {
  it('handles a checkRed action', () => {
    const action = checkRed(4);
    const initialState = { red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };
    const newState = reducer(initialState, action);
    expect(newState).toEqual({ red: [5, 6, 7, 8, 9, 10, 11, 12] });
    const newState2 = reducer(newState, checkRed(8));
    expect(newState2).toEqual({ red: [9, 10, 11, 12] });
  });
});
