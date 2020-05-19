import React from 'react';
import styles from './Board.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWhiteDie1Value, getWhiteDie2Value, getRedDieValue, getYellowDieValue, getGreenDieValue, getBlueDieValue } from '../../redux/selectors/diceSelectors';
import { rollDice } from '../../redux/actions/diceActions';

export default function Board() {
  const dispatch = useDispatch();
  const white1 = useSelector(getWhiteDie1Value);
  const white2 = useSelector(getWhiteDie2Value);
  const red = useSelector(getRedDieValue);
  const yellow = useSelector(getYellowDieValue);
  const green = useSelector(getGreenDieValue);
  const blue = useSelector(getBlueDieValue);

  return (
    <>
      <button onClick={() => dispatch(rollDice())}>Roll</button>
      <div>{white1}</div>
      <div>{white2}</div>
      <div>{red}</div>
      <div>{yellow}</div>
      <div>{green}</div>
      <div>{blue}</div>
    </>
  );
}
