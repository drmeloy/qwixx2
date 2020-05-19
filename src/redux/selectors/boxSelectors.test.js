import { getReds, getYellows, getGreens, getBlues, getPenalties } from './boxSelectors';

describe('box selectors', () => {
  const state = {
    boxes: {
      red: [5, 6, 7, 8, 9, 10, 11, 12],
      yellow: [],
      green: [9, 10, 11, 12],
      blue: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      penalties: 2
    }
  };

  it('can get the reds', () => {
    expect(getReds(state)).toEqual([5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('can get the yellows', () => {
    expect(getYellows(state)).toEqual([]);
  });

  it('can get the greens', () => {
    expect(getGreens(state)).toEqual([9, 10, 11, 12]);
  });

  it('can get the blues', () => {
    expect(getBlues(state)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it('can get the penalties', () => {
    expect(getPenalties(state)).toEqual(2);
  });
});
