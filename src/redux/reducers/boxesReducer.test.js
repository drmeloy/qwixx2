import { disableRow, checkBox } from '../actions/boxActions';
import reducer from './boxesReducer';

describe('boxes reducer', () => {
  const initialState = {
    red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    penalties: 0
  };

  it('handles a checkBox(red) action', () => {
    const newState = reducer(initialState, checkBox('red', 4));
    expect(newState).toEqual({
      red: [5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    });
  });

  it('handles a checkBox(yellow) action', () => {
    const newState = reducer(initialState, checkBox('yellow', 12));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    });
  });

  it('handles a checkBox(green) action', () => {
    const newState = reducer(initialState, checkBox('green', 8));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    });
  });

  it('handles a checkBox(blue) action', () => {
    const newState = reducer(initialState, checkBox('blue', 2));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    });
  });

  it('handles a checkBox(penalty) action', () => {
    const newState = reducer(initialState, checkBox('penalty'));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 1
    });
  });

  it('handles a disableRow action', () => {
    const initialState = {
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    };

    const newState = reducer(initialState, disableRow('red'));
    expect(newState).toEqual({
      red: [],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 0
    });

    const newState2 = reducer(newState, disableRow('blue'));
    expect(newState2).toEqual({
      red: [],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      blue: [],
      penalties: 0
    });
  });
});
