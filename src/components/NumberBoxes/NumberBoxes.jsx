import React from 'react';
import styles from './NumberBoxes.css';
import { colors, generateRow } from '../../utils/boxesHelpers';

export default function NumberBoxes(){
  const boxes = colors.map(color => generateRow(color));

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
