import React from 'react';
import { getReds, getYellows, getGreens, getBlues } from '../redux/selectors/boxSelectors';
import NumberBox from '../components/NumberBox/NumberBox';

export const rowHash = {
  'red': getReds,
  'yellow': getYellows,
  'green': getGreens,
  'blue': getBlues
};

export const generateRow = (color, rowSelector, numChecked, setNumChecked, lastBoxChecked, setLastBoxChecked) => {
  let numbers = [];
  if(color === 'red' || color === 'yellow'){
    for(let i = 2; i < 14; i++){
      numbers.push(i);
    }
  }
  else if(color === 'green' || color === 'blue'){
    for(let i = 12; i > 0; i--){
      numbers.push(i);
    }
  }

  return numbers.map((num => (
    <NumberBox key={color + num} color={color} num={num} rowSelector={rowSelector} numChecked={numChecked} setNumChecked={setNumChecked} lastBoxChecked={lastBoxChecked} setLastBoxChecked={setLastBoxChecked} />
  )));
};
