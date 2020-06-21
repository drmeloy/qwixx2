import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './NumberBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { addAction, removeAction } from '../../redux/actions/actionsActions';
import lock from '../../../public/assets/lock.png';
import check from '../../../public/assets/check.png';

export default function NumberBox({ color, num, rowSelector, numChecked, setNumChecked, lastBoxChecked, setLastBoxChecked }){
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);
  const boxes = useSelector(rowSelector);

  const changeQueue = (color, num) => {
    if(queue.length < 1) dispatch(addAction([color, num]));
    else if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) dispatch(removeAction([color, num]));
    else dispatch(addAction([color, num]));
  };

  const changeChecked = (color, num) => {
    if(queue.length === 2){
      if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) setChecked(!checked);
      setNumChecked(numChecked - 1);
      if((color === 'red' || color === 'yellow') && num === 12) setLastBoxChecked(!lastBoxChecked);
      if((color === 'green' || color === 'blue') && num === 2) setLastBoxChecked(!lastBoxChecked);  
    }
    else {
      setChecked(!checked);
      if((color === 'red' || color === 'yellow') && num === 12) setLastBoxChecked(!lastBoxChecked);
      if((color === 'green' || color === 'blue') && num === 2) setLastBoxChecked(!lastBoxChecked);      
      if(checked) setNumChecked(numChecked - 1);
      else setNumChecked(numChecked + 1);
    }
  };

  const handleClick = () => {  
    changeChecked(color, num);
    changeQueue(color, num);
  };

  const boxClasses = `
    ${styles.box} 
    ${boxes.includes(num) ? styles[color] : styles.inactive} 
    ${checked ? styles.checkedBox : ''}
  `;


  return (
    <div className={boxClasses} onClick={handleClick}>
      {(num === 13 || num === 1) && lastBoxChecked ? <img src={check}></img> : num === 13 || num === 1 ? <img src={lock}></img> : checked ? <img src={check}></img> : num}
    </div>
  );
}

NumberBox.propTypes = {
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  rowSelector: PropTypes.func.isRequired,
  numChecked: PropTypes.number.isRequired,
  setNumChecked: PropTypes.func.isRequired
};
