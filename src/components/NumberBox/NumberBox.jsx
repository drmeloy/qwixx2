import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './NumberBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { addAction, removeAction } from '../../redux/actions/actionsActions';
import lock from '../../../public/assets/lock.png';
import check from '../../../public/assets/check.png';
import { getWhiteDiceSum, getWhiteDie1Value, getWhiteDie2Value, getRedDieValue, getYellowDieValue, getGreenDieValue, getBlueDieValue } from '../../redux/selectors/diceSelectors';
import { diceValuesHash } from '../../utils/boxesHelpers';

export default function NumberBox({ color, num, rowSelector, numChecked, setNumChecked, lastBoxChecked, setLastBoxChecked }){
  const [checked, setChecked] = useState(false);
  const [available, setAvailable] = useState(false);
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);
  const boxes = useSelector(rowSelector);
  const colorValueSelectors = diceValuesHash[color];
  const colorValue1 = useSelector(colorValueSelectors[0]);
  const colorValue2 = useSelector(colorValueSelectors[1]);
  const whiteValue = useSelector(getWhiteDiceSum);

  const changeQueue = (color, num) => {
    if(queue.length < 1) dispatch(addAction([color, num]));
    else if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) dispatch(removeAction([color, num]));
    else dispatch(addAction([color, num]));
  };

  const checkIfLastBox = (color, num) => {
    if((color === 'red' || color === 'yellow') && num === 12) setLastBoxChecked(!lastBoxChecked);
    if((color === 'green' || color === 'blue') && num === 2) setLastBoxChecked(!lastBoxChecked); 
  };

  const changeChecked = (color, num) => {
    if(queue.length === 2){
      if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) setChecked(!checked);
      setNumChecked(numChecked - 1);
      checkIfLastBox(color, num);
    }
    else {
      setChecked(!checked);
      checkIfLastBox(color, num);     
      if(checked) setNumChecked(numChecked - 1);
      else setNumChecked(numChecked + 1);
    }
  };

  const handleClick = () => {  
    changeChecked(color, num);
    changeQueue(color, num);
  };

  const checkAvailability = () => {
    if(num === colorValue1 || num ===  colorValue2 || num === whiteValue) setAvailable(true);
    else setAvailable(false);
  };

  useEffect(() => {
    checkAvailability()
  }, [useSelector(getWhiteDie1Value), useSelector(getWhiteDie2Value), useSelector(getRedDieValue), useSelector(getYellowDieValue), useSelector(getGreenDieValue), useSelector(getBlueDieValue)]);

  const boxClasses = `
    ${styles.box} 
    ${boxes.includes(num) ? styles[color] : styles.inactive} 
    ${checked ? styles.checkedBox : ''} 
    ${available && boxes.includes(num) ? styles.available : ''}
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
  setNumChecked: PropTypes.func.isRequired,
  lastBoxChecked: PropTypes.bool.isRequired,
  setLastBoxChecked: PropTypes.func.isRequired
};
