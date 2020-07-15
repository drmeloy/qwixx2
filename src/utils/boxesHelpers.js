import React from 'react';
import { getReds, getYellows, getGreens, getBlues } from '../redux/selectors/boxSelectors';
import NumberBox from '../components/NumberBox/NumberBox';
import { getRedOption1, getRedOption2, getYellowOption1, getYellowOption2, getGreenOption1, getGreenOption2, getBlueOption1, getBlueOption2 } from '../redux/selectors/diceSelectors';

export const rowHash = {
  'red': getReds,
  'yellow': getYellows,
  'green': getGreens,
  'blue': getBlues
};

export const diceValuesHash = {
  'red': [getRedOption1, getRedOption2],
  'yellow': [getYellowOption1, getYellowOption2],
  'green': [getGreenOption1, getGreenOption2],
  'blue': [getBlueOption1, getBlueOption2]
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
