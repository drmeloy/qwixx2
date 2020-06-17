import React from 'react';
import styles from './NumberBoxes.css';
import Row from '../Row/Row';

export default function NumberBoxes(){
  return (
    <section className={styles.NumberBoxes}>
      <Row color='red' />
      <Row color='yellow' />
      <Row color='green' />
      <Row color='blue' />
    </section>
  );
}
