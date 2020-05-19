import { getRedScore, getYellowScore, getGreenScore, getBlueScore, getPenaltyScore, getTotalScore } from './scoreSelectors';

describe('score selectors', () => {
  const state = {
    score: {
      redIndex: 2,
      redScore: 3,
      yellowIndex: 6,
      yellowScore: 21,
      greenIndex: 10,
      greenScore: 55,
      blueIndex: 12,
      blueScore: 78,
      penaltyIndex: 3,
      penaltyScore: -15
    }
  };

  it('can get the red score', () => {
    expect(getRedScore(state)).toEqual(3);
  });

  it('can get the yellow score', () => {
    expect(getYellowScore(state)).toEqual(21);
  });

  it('can get the green score', () => {
    expect(getGreenScore(state)).toEqual(55);
  });

  it('can get the blue score', () => {
    expect(getBlueScore(state)).toEqual(78);
  });

  it('can get the penalty score', () => {
    expect(getPenaltyScore(state)).toEqual(-15);
  });

  it('can get the total score', () => {
    expect(getTotalScore(state)).toEqual(142);
  });
});
