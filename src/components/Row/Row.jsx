import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';
import { generateRow } from '../../utils/boxesHelpers';
import { useDispatch } from 'react-redux';
import { unlockLastBox } from '../../redux/actions/boxActions';

export default function Row({ color }){
  const [numChecked, setNumChecked] = useState(0);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(numChecked > 4) dispatch(unlockLastBox(color));
    else if(numChecked < 5) setRowUnlocked(false);
  }, [numChecked]);

  const row = generateRow(color, numChecked, setNumChecked);

  return (
    <section className={styles.Row}>
      {row}
    </section>
  );
}

Row.propTypes = {
  color: PropTypes.string.isRequired
};
