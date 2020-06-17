import React from 'react';
import { getReds, getYellows, getGreens, getBlues } from '../redux/selectors/boxSelectors';
import NumberBox from '../components/NumberBox/NumberBox';
import { getRedScore, getYellowScore, getGreenScore, getBlueScore } from '../redux/selectors/scoreSelectors';

const rowHash = {
  'red': getReds,
  'yellow': getYellows,
  'green': getGreens,
  'blue': getBlues
};

const scoreHash = {
  'red': getRedScore,
  'yellow': getYellowScore,
  'green': getGreenScore,
  'blue': getBlueScore
};

export const generateRow = (color, numChecked, setNumChecked) => {
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
    <NumberBox key={color + num} color={color} num={num} rowSelector={rowHash[color]} numChecked={numChecked} setNumChecked={setNumChecked} />
  )));
};
