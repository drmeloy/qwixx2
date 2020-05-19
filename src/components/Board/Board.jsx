import React from 'react';
import DiceDisplay from '../DiceDisplay/DiceDisplay';
import styles from './Board.css';

export default function Board() {
  return (
    <>
      <div className={styles.Board}>
        <DiceDisplay />
      </div>
    </>
  );
}
