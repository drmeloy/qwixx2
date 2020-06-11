import React, { useState } from 'react';
import styles from './NumberBox.css';
import { useDispatch, useSelector } from 'react-redux';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { addAction, removeAction } from '../../redux/actions/actionsActions';
import lock from '../../../public/assets/lock.png';
import { getReds, getYellows, getGreens, getBlues } from '../../redux/selectors/boxSelectors';

export default function NumberBox({ color, num, selector }){
  const [checked, swapChecked] = useState(false);
  const dispatch = useDispatch();
  const queue = useSelector(getBothActions);

  const changeQueue = (color, num) => {
    if(queue.length < 1) dispatch(addAction([color, num]));
    else if(JSON.stringify(queue).includes(JSON.stringify([color, num]))) dispatch(removeAction([color, num]));
    else dispatch(addAction([color, num]));
  };

  const handleClick = () => {
    swapChecked(!checked);
    changeQueue(color, num);
  };

  return (
    <div className={`${useSelector(selector).includes(num) ? styles[color] : styles.inactive} ${checked === true ? styles.checkedBox : ''}`} onClick={handleClick}>
      {num === 13 || num === 1 ? <img src={lock}></img> : num}
    </div>
  );
}

