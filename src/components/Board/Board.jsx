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
      <div>White 1: {white1}</div>
      <div>White 2: {white2}</div>
      <div>Red: {red}</div>
      <div>Yellow: {yellow}</div>
      <div>Green: {green}</div>
      <div>Blue: {blue}</div>
    </>
  );
}
