import React from 'react';
import DiceDisplay from '../DiceDisplay/DiceDisplay';
import styles from './Board.css';
import ScoreDisplay from '../ScoreDisplay/ScoreDisplay';

export default function Board() {
  return (
    <main className={styles.Board}>
      <ScoreDisplay />
      <DiceDisplay />
    </main>
  );
}
