import { CHECK_RED } from '../actions/boxActions';

const initialState = {
  red: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  yellow: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  green: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  blue: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  penalty: [],
  score: 0
};

const generateBoxArray = num => {
  const array = [];
  for(let i = num + 1; i < 13; i++) array.push(i);
  return array;
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case CHECK_RED: 
      const boxArray = generateBoxArray(action.payload);
      return { ...state, red: boxArray };
  }
}
