export const getWhiteDie1Value = state => state.dice.whiteDie1;
export const getWhiteDie2Value = state => state.dice.whiteDie2;
export const getRedDieValue = state => state.dice.redDie;
export const getYellowDieValue = state => state.dice.yellowDie;
export const getGreenDieValue = state => state.dice.greenDie;
export const getBlueDieValue = state => state.dice.blueDie;

export const getWhiteDiceSum = state => state.dice.whiteDie1 + state.dice.whiteDie2;
export const getRedOption1 = state => state.dice.whiteDie1 + state.dice.redDie;
export const getRedOption2 = state => state.dice.whiteDie2 + state.dice.redDie;
export const getYellowOption1 = state => state.dice.whiteDie1 + state.dice.yellowDie;
export const getYellowOption2 = state => state.dice.whiteDie2 + state.dice.yellowDie;
export const getGreenOption1 = state => state.dice.whiteDie1 + state.dice.greenDie;
export const getGreenOption2 = state => state.dice.whiteDie2 + state.dice.greenDie;
export const getBlueOption1 = state => state.dice.whiteDie1 + state.dice.blueDie;
export const getBlueOption2 = state => state.dice.whiteDie2 + state.dice.blueDie;
