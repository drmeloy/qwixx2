import React from 'react';
import styles from './PenaltyBoxes.css';
import { useDispatch } from 'react-redux';
import { checkBox } from '../../redux/actions/boxActions';

export default function PenaltyBoxes(){
  const dispatch = useDispatch();
  const addPenalty = () => dispatch(checkBox('penalty'));

  return (
    <section className={styles.PenaltySection}>
      Penalty boxes: -5 points each
      <section>
        <input type='checkbox' onChange={addPenalty}></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
        <input type='checkbox'></input>
      </section>
    </section>
  );
}
