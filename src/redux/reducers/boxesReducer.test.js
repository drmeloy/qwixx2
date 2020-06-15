import { disableRow, checkBox, unlockLastBox } from '../actions/boxActions';
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

  it('handles a unlockLastBox action', () => {
    const state = {
      unlockedRows: {
        red: false,
        yellow: false,
        green: false,
        blue: false
      }
    };
    const newState = reducer(state, unlockLastBox('red'));
    expect(newState).toEqual({
      unlockedRows: {
        red: true,
        yellow: false,
        green: false,
        blue: false
      }
    });

    const newState2 = reducer(newState, unlockLastBox('blue'));
    expect(newState2).toEqual({
      unlockedRows: {
        red: true,
        yellow: false,
        green: false,
        blue: true
      }
    });
  });

  it('adds final box to row when it is unlocked', () => {
    const state = {
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0,
      unlockedRows: {
        red: false,
        yellow: false,
        green: false,
        blue: false
      }
    };

    const newState = reducer(unlockLastBox('red'));
    expect(newState).toEqual({
      red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      green: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      blue: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
      penalties: 0,
      unlockedRows: {
        red: true,
        yellow: false,
        green: false,
        blue: false
      }
    });
  });
});
