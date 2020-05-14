export const generateBoxArray = num => {
  const array = [];
  for(let i = num + 1; i < 13; i++) array.push(i);
  return array;
};

export const CHECK_RED = 'CHECK_RED';
export const CHECK_YELLOW = 'CHECK_YELLOW';
export const CHECK_GREEN = 'CHECK_GREEN';
export const CHECK_BLUE = 'CHECK_BLUE';
export const CHECK_PENALTY = 'CHECK_PENALTY';

export const rowDictionary = {
  'red': CHECK_RED,
  'yellow': CHECK_YELLOW,
  'green': CHECK_GREEN,
  'blue': CHECK_BLUE,
  'penalty': CHECK_PENALTY
};

const INCREMENT_SCORE_RED = 'INCREMENT_SCORE_RED';
const INCREMENT_SCORE_YELLOW = 'INCREMENT_SCORE_YELLOW';
const INCREMENT_SCORE_GREEN = 'INCREMENT_SCORE_GREEN';
const INCREMENT_SCORE_BLUE = 'INCREMENT_SCORE_BLUE';
const INCREMENT_SCORE_PENALTY = 'INCREMENT_SCORE_PENALTY';

export const scoreDictionary = {
  'red': INCREMENT_SCORE_RED,
  'yellow': INCREMENT_SCORE_YELLOW,
  'green': INCREMENT_SCORE_GREEN,
  'blue': INCREMENT_SCORE_BLUE,
  'penalty': INCREMENT_SCORE_PENALTY
};
