export const getWhiteDie1Value = state => state.whiteDie1;
export const getWhiteDie2Value = state => state.whiteDie2;
export const getRedDieValue = state => state.redDie;
export const getYellowDieValue = state => state.yellowDie;
export const getGreenDieValue = state => state.greenDie;
export const getBlueDieValue = state => state.blueDie;

export const getWhiteDiceSum = state => state.whiteDie1 + state.whiteDie2;
export const getRedOption1 = state => state.whiteDie1 + state.redDie;
export const getRedOption2 = state => state.whiteDie2 + state.redDie;
export const getYellowOption1 = state => state.whiteDie1 + state.yellowDie;
export const getYellowOption2 = state => state.whiteDie2 + state.yellowDie;
export const getGreenOption1 = state => state.whiteDie1 + state.greenDie;
export const getGreenOption2 = state => state.whiteDie2 + state.greenDie;
export const getBlueOption1 = state => state.whiteDie1 + state.blueDie;
export const getBlueOption2 = state => state.whiteDie2 + state.blueDie;
