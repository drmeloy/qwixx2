export const CHECK_RED = 'CHECK_RED';
export const checkRed = num => ({ type: CHECK_RED, payload: num });

export const CHECK_YELLOW = 'CHECK_YELLOW';
export const checkYellow = num => ({ type: CHECK_YELLOW, payload: num });

export const CHECK_GREEN = 'CHECK_GREEN';
export const checkGreen = num => ({ type: CHECK_GREEN, payload: num });

export const CHECK_BLUE = 'CHECK_BLUE';
export const checkBlue = num => ({ type: CHECK_BLUE, payload: num });

export const CHECKK_PENALTY = 'CHECK_PENALTY';
export const checkPenalty = () => ({ type: CHECKK_PENALTY });