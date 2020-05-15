export const getRedScore = state => state.redScore;
export const getYellowScore = state => state.yellowScore;
export const getGreenScore = state => state.greenScore;
export const getBlueScore = state => state.blueScore;
export const getPenaltyScore = state => state.penaltyScore;
export const getTotalScore = state => state.redScore + state.yellowScore + state.greenScore + state.blueScore + state.penaltyScore;
