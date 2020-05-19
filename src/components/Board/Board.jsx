import React from 'react';
import styles from './Board.css';
import { useDispatch } from 'react-redux';
import { getRedDieValue } from '../../redux/selectors/diceSelectors';

export default function Board() {

  return (
    <>
      <div className={styles.Board}>Hello</div>
    </>
  );
}
