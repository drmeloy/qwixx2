import React from 'react';
import styles from './Board.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRedDieValue, getBlueDieValue } from '../../redux/selectors/diceSelectors';
import { rollDice } from '../../redux/actions/diceActions';

export default function Board() {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.Board}>
        <button onClick={() => dispatch(rollDice())}>Roll</button>
      </div>
    </>
  );
}
