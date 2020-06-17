import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';
import { generateRow } from '../../utils/boxesHelpers';

export default function Row({ color }){
  const [numChecked, setNumChecked] = useState(0);
  const [rowUnlocked, setRowUnlocked] = useState(false);
  
  useEffect(() => {
    if(numChecked > 4) setRowUnlocked(true);
    else if(numChecked < 5) setRowUnlocked(false);
  }, [numChecked]);

  const row = generateRow(color, numChecked, setNumChecked, rowUnlocked, setRowUnlocked);

  return (
    <section className={styles.Row}>
      {row}
    </section>
  );
}

Row.propTypes = {
  color: PropTypes.string.isRequired
};
