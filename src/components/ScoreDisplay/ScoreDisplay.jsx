import React, { useEffect } from 'react';
import styles from './ScoreDisplay.css';
import { useSelector } from 'react-redux';
import { getRedScore, getYellowScore, getGreenScore, getBlueScore, getPenaltyScore, getTotalScore } from '../../redux/selectors/scoreSelectors';
import PenaltyBoxes from '../PenaltyBoxes/PenaltyBoxes';

export default function ScoreDisplay(){
  let redScore = useSelector(getRedScore);
  let yellowScore = useSelector(getYellowScore);
  let greenScore = useSelector(getGreenScore);
  let blueScore = useSelector(getBlueScore);
  let penaltyScore = useSelector(getPenaltyScore);
  let totalScore = useSelector(getTotalScore);

  return (
    <section className={styles.ScoreDisplay}>
      <span className={styles.red}>{redScore}</span>
      <span> + </span>
      <span className={styles.yellow}>{yellowScore}</span>
      <span> + </span>
      <span className={styles.green}>{greenScore}</span>
      <span> + </span>
      <span className={styles.blue}>{blueScore}</span>
      <span> - </span>
      <span className={styles.penalty}>{penaltyScore}</span>
      <span> = </span>
      <span className={styles.total}>{totalScore}</span>
      <PenaltyBoxes />
    </section>
  );
}
