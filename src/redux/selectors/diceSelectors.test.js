import { getWhiteDie1Value, getWhiteDie2Value, getWhiteDiceSum, getRedDieValue, getYellowDieValue, getGreenDieValue, getBlueDieValue, getRedOption1, getRedOption2, getYellowOption1, getYellowOption2, getGreenOption1, getGreenOption2, getBlueOption1, getBlueOption2 } from './diceSelectors';

describe('dice selectors', () => {
  const state = {
    dice: {
      whiteDie1: 3,
      whiteDie2: 6,
      redDie: 5,
      yellowDie: 2,
      greenDie: 1,
      blueDie: 4
    }
  };

  it('can get the white die 1 value', () => {
    expect(getWhiteDie1Value(state)).toEqual(3);
  });

  it('can get the white die 2 value', () => {
    expect(getWhiteDie2Value(state)).toEqual(6);
  });

  it('can get the red die value', () => {
    expect(getRedDieValue(state)).toEqual(5);
  });

  it('can get the yellow die value', () => {
    expect(getYellowDieValue(state)).toEqual(2);
  });

  it('can get the green die value', () => {
    expect(getGreenDieValue(state)).toEqual(1);
  });

  it('can get the blue die value', () => {
    expect(getBlueDieValue(state)).toEqual(4);
  });

  it('can get the sum of the white dice', () => {
    expect(getWhiteDiceSum(state)).toEqual(9);
  });

  it('can get red option 1', () => {
    expect(getRedOption1(state)).toEqual(8);
  });

  it('can get red option 2', () => {
    expect(getRedOption2(state)).toEqual(11);
  });

  it('can get yellow option 1', () => {
    expect(getYellowOption1(state)).toEqual(5);
  });

  it('can get yellow option 2', () => {
    expect(getYellowOption2(state)).toEqual(8);
  });

  it('can get green option 1', () => {
    expect(getGreenOption1(state)).toEqual(4);
  });

  it('can get green option 2', () => {
    expect(getGreenOption2(state)).toEqual(7);
  });

  it('can get blue option 1', () => {
    expect(getBlueOption1(state)).toEqual(7);
  });

  it('can get blue option 2', () => {
    expect(getBlueOption2(state)).toEqual(10);
  });
});
