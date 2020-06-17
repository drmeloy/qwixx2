import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';
import { generateRow, rowHash } from '../../utils/boxesHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { unlockLastBox, lockLastBox } from '../../redux/actions/boxActions';

export default function Row({ color }){
  const [numChecked, setNumChecked] = useState(0);
  const dispatch = useDispatch();
  const rowSelector = rowHash[color];
  const boxes = useSelector(rowSelector);
  const row = generateRow(color, rowSelector, numChecked, setNumChecked);

  useEffect(() => {
    if(numChecked > 4) dispatch(unlockLastBox(color));
    else if(numChecked < 5 && (color === 'red' || color === 'yellow') && boxes.includes(12) || (color === 'green' || color === 'blue') && boxes.includes(2)) dispatch(lockLastBox(color));
  }, [numChecked]);


  return (
    <section className={styles.Row}>
      {row}
    </section>
  );
}

Row.propTypes = {
  color: PropTypes.string.isRequired
};
