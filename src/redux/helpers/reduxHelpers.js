import { CHECK_RED, CHECK_YELLOW, CHECK_GREEN, CHECK_BLUE, CHECK_PENALTY } from '../actions/boxActions';

export const generateBoxArray = num => {
  const array = [];
  for(let i = num + 1; i < 13; i++) array.push(i);
  return array;
};

export const rowDictionary = {
  'red': 'CHECK_RED',
  'yellow': 'CHECK_YELLOW',
  'green': 'CHECK_GREEN',
  'blue': 'CHECK_BLUE',
  'penalty': 'CHECK_PENALTY'
};
