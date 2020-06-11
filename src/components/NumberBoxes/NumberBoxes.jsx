import React from 'react';
import styles from './NumberBoxes.css';
import { colors, generateRow } from '../../utils/boxesHelpers';

export default function NumberBoxes(){
  const boxes = colors.map(color => generateRow(color));


  return (
    <section className={styles.NumberBoxes}>
      <section className={styles.row}>
        {boxes[0]}
      </section>
      <section className={styles.row}>
        {boxes[1]}
      </section>
      <section className={styles.row}>
        {boxes[2]}
      </section>
      <section className={styles.row}>
        {boxes[3]}
      </section>
    </section>
  );
}
