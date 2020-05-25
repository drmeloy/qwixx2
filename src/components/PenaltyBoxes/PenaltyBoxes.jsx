import React from 'react';
import styles from './PenaltyBoxes.css';
import { useDispatch } from 'react-redux';
import { checkBox } from '../../redux/actions/boxActions';
import { incrementScore } from '../../redux/actions/scoreActions';

export default function PenaltyBoxes(){
  const dispatch = useDispatch();  
  const addPenalty = ({ target }) => {
    if(target.checked){
      dispatch(checkBox('penalty'));
      dispatch(incrementScore('penalty'));
    }
    else {
      alert('checked!');
    }
  };

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
