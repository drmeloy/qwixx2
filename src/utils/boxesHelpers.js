import React from 'react';
import lock from '../../public/assets/lock.png';
import styles from '../components/NumberBoxes/NumberBoxes.css';
import { useSelector } from 'react-redux';
import { getReds, getYellows, getGreens, getBlues } from '../redux/selectors/boxSelectors';

export const colors = ['red', 'yellow', 'green', 'blue'];
const funcHash = {
  'red': getReds,
  'yellow': getYellows,
  'green': getGreens,
  'blue': getBlues
};

export const generateRow = color => {
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
  return numbers.map((num, i) => (
    <li key={color + ' ' + i} className={useSelector(funcHash[color]).includes(num) ? styles[color] : styles.inactive}>
      {num === 13 || num === 1 ? <img src={lock}></img> : num}
    </li>
  ));
};

