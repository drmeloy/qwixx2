import React from 'react';
import styles from './NumberBoxes.css';
import { boxes } from '../../utils/boxesHelpers';

export default function NumberBoxes(){
  return (
    <section className={styles.NumberBoxes}>
      <ul>
        {boxes[0]}
      </ul>
      <ul>
        {boxes[1]}
      </ul>
      <ul>
        {boxes[2]}
      </ul>
      <ul>
        {boxes[3]}
      </ul>
    </section>
  );
}
