import React from 'react';
import lock from '../../public/assets/lock.png';
import styles from '../components/NumberBoxes/NumberBoxes.css';
import { useSelector, useDispatch } from 'react-redux';
import { getReds, getYellows, getGreens, getBlues } from '../redux/selectors/boxSelectors';
import { addAction, removeAction } from '../redux/actions/actionsActions';
import { getBothActions } from '../redux/selectors/actionsSelectors';

export const colors = ['red', 'yellow', 'green', 'blue'];
const funcHash = {
  'red': getReds,
  'yellow': getYellows,
  'green': getGreens,
  'blue': getBlues
};

export const generateRow = color => {
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);

  const changeQueue = (color, num) => {
    if(queue.length < 1) dispatch(addAction([color, num]));
    else if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) dispatch(removeAction([color, num]));
    else dispatch(addAction([color, num]));
  };

  const swapBoxCheck = ({ target }) => {
    
  };

  const handleClick = (color, num) => {
    changeQueue(color, num);
    swapBoxCheck(color, num);
  };

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
    <li key={color + ' ' + i} className={useSelector(funcHash[color]).includes(num) ? styles[color] : styles.inactive} onClick={handleClick}>
      {num === 13 || num === 1 ? <img src={lock}></img> : num}
    </li>
  ));
};


