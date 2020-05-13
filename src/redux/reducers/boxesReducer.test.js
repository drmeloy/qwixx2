import { checkRed, checkYellow, checkGreen, checkBlue, checkPenalty } from '../actions/boxActions';
import reducer from './boxesReducer';

describe('boxes reducer', () => {
  it('handles a checkRed action', () => {
    const initialState = { red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };

    const newState = reducer(initialState, checkRed(4));
    expect(newState).toEqual({ red: [5, 6, 7, 8, 9, 10, 11, 12] });

    const newState2 = reducer(newState, checkRed(8));
    expect(newState2).toEqual({ red: [9, 10, 11, 12] });

    const newState3 = reducer(newState2, checkRed(12));
    expect(newState3).toEqual({ red: [] });
  });

  it('handles a checkYellow action', () => {
    const initialState = { yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };

    const newState = reducer(initialState, checkYellow(2));
    expect(newState).toEqual({ yellow: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });

    const newState2 = reducer(newState, checkYellow(3));
    expect(newState2).toEqual({ yellow: [4, 5, 6, 7, 8, 9, 10, 11, 12] });

    const newState3 = reducer(newState2, checkYellow(11));
    expect(newState3).toEqual({ yellow: [12] });
  });

  it('handles a checkGreen action', () => {
    const initialState = { green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };
    const newState = reducer(initialState, checkGreen(5));
    expect(newState).toEqual({ green: [6, 7, 8, 9, 10, 11, 12] });
  });

  it('handles a checkBlue action', () => {
    const initialState = { blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };
    const newState = reducer(initialState, checkBlue(10));
    expect(newState).toEqual({ blue: [11, 12] });
  });

  it('handles a checkPenalty action', () => {
    const initialState = { penalties: 0 };

    const newState = reducer(initialState, checkPenalty());
    expect(newState).toEqual({ penalties: 1 });

    const newState2 = reducer(newState, checkPenalty());
    expect(newState2).toEqual({ penalties: 2 });
  });
});
