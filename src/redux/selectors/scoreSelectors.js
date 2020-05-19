export const getRedScore = state => state.score.redScore;
export const getYellowScore = state => state.score.yellowScore;
export const getGreenScore = state => state.score.greenScore;
export const getBlueScore = state => state.score.blueScore;
export const getPenaltyScore = state => state.score.penaltyScore;
export const getTotalScore = state => state.score.redScore + state.score.yellowScore + state.score.greenScore + state.score.blueScore + state.score.penaltyScore;
