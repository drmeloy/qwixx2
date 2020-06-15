import { disableRow, checkBox } from '../actions/boxActions';
import reducer from './boxesReducer';

describe('boxes reducer', () => {
  const initialState = {
    red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
    blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
    penalties: 0
  };

  it('handles a checkBox(red) action', () => {
    const newState = reducer(initialState, checkBox('red', 4));
    expect(newState).toEqual({
      red: [5, 6, 7, 8, 9, 10, 11],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0
    });
  });

  it('handles a checkBox(yellow) action', () => {
    const newState = reducer(initialState, checkBox('yellow', 12));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      yellow: [],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0
    });
  });

  it('handles a checkBox(green) action', () => {
    const newState = reducer(initialState, checkBox('green', 8));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0
    });
  });

  it('handles a checkBox(blue) action', () => {
    const newState = reducer(initialState, checkBox('blue', 2));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [],
      penalties: 0
    });
  });

  it('handles a checkBox(penalty) action', () => {
    const newState = reducer(initialState, checkBox('penalty'));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 1
    });
  });

  it('handles a disableRow action', () => {
    const newState = reducer(initialState, disableRow('red'));
    expect(newState).toEqual({
      red: [],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0
    });

    const newState2 = reducer(newState, disableRow('blue'));
    expect(newState2).toEqual({
      red: [],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [],
      penalties: 0
    });
  });
});
