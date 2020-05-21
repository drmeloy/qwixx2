import React from 'react';
import styles from './ScoreDisplay.css';
import { useSelector } from 'react-redux';
import { getRedScore, getYellowScore, getGreenScore, getBlueScore, getPenaltyScore, getTotalScore } from '../../redux/selectors/scoreSelectors';
import PenaltyBoxes from '../PenaltyBoxes/PenaltyBoxes';

export default function ScoreDisplay(){
  const redScore = useSelector(getRedScore);
  const yellowScore = useSelector(getYellowScore);
  const greenScore = useSelector(getGreenScore);
  const blueScore = useSelector(getBlueScore);
  const penaltyScore = useSelector(getPenaltyScore);
  const totalScore = useSelector(getTotalScore);

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
