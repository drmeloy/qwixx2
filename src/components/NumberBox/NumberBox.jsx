import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NumberBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { addAction, removeAction } from '../../redux/actions/actionsActions';
import lock from '../../../public/assets/lock.png';
import check from '../../../public/assets/check.png';
import { unlockLastBox } from '../../redux/actions/boxActions';

export default function NumberBox({ color, num, rowSelector, scoreSelector }){
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);
  const boxes = useSelector(rowSelector);
  const score = useSelector(scoreSelector);

  if(score >= 15){
    dispatch(unlockLastBox(color));
  }

  const changeQueue = (color, num) => {
    if(queue.length < 1) dispatch(addAction([color, num]));
    else if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) dispatch(removeAction([color, num]));
    else dispatch(addAction([color, num]));
  };

  const changeChecked = (color, num) => {
    if(queue.length === 2){
      if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) setChecked(!checked);
    }
    else setChecked(!checked);
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
      {num === 13 || num === 1 ? <img src={lock}></img> : checked ? <img src={check}></img> : num}
    </div>
  );
}

NumberBox.propTypes = {
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  rowSelector: PropTypes.func.isRequired,
  scoreSelector: PropTypes.func.isRequired
};
