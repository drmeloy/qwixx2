import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './NumberBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { addAction, removeAction } from '../../redux/actions/actionsActions';
import lock from '../../../public/assets/lock.png';
import check from '../../../public/assets/check.png';

export default function NumberBox({ color, num, selector }){
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);

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

  return (
    <div 
      className={`
        ${styles.box} 
        ${useSelector(selector).includes(num) ? styles[color] : styles.inactive} 
        ${checked === true ? styles.checkedBox : ''}`}
      onClick={handleClick}
    >
      {num === 13 || num === 1 ? <img src={lock}></img> : checked ? <img src={check}></img> : num}
    </div>
  );
}

NumberBox.propTypes = {
  color: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  selector: PropTypes.func.isRequired
};
