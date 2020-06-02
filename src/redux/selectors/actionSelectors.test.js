import { getFirstAction, getSecondAction, getBothActions } from './actionsSelectors';

describe('actions selectors', () => {
  const state = {
    actions: [['red', 4], ['blue', 8]]
  };

  it('can get the first action', () => {
    expect(getFirstAction(state)).toEqual(['red', 4]);
  });

  it('can get the second action', () => {
    expect(getSecondAction(state)).toEqual(['blue', 8]);
  });

  it('can get both actions', () => {
    expect(getBothActions(state)).toEqual([['red', 4], ['blue', 8]]);
  });
});
