import React from 'react';
import DiceDisplay from '../DiceDisplay/DiceDisplay';
import styles from './Board.css';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';
import NumberBoxes from '../NumberBoxes/NumberBoxes';

export default function Board() {
  return (
    <main className={styles.Board}>
      <NumberBoxes />
      <ScoreDisplay />
      <DiceDisplay />
    </main>
  );
}
