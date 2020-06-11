import React from 'react';
import styles from './PenaltyBoxes.css';
import { useDispatch } from 'react-redux';
import { addAction, removeAction } from '../../redux/actions/actionsActions';

export default function PenaltyBoxes(){
  const dispatch = useDispatch();

  return (
    <section className={styles.PenaltySection}>
      Penalty boxes: -5 points each
      <section>
        <input type='checkbox' onChange={({ target }) => target.checked ? dispatch(addAction(['penalty'])) : dispatch(removeAction(['penalty']))}></input>
        <input type='checkbox' onChange={({ target }) => target.checked ? dispatch(addAction(['penalty'])) : dispatch(removeAction(['penalty']))}></input>
        <input type='checkbox' onChange={({ target }) => target.checked ? dispatch(addAction(['penalty'])) : dispatch(removeAction(['penalty']))}></input>
        <input type='checkbox' onChange={({ target }) => target.checked ? dispatch(addAction(['penalty'])) : dispatch(removeAction(['penalty']))}></input>
      </section>
    </section>
  );
}
