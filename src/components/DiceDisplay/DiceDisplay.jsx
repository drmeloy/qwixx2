import React from 'react';
import styles from './DiceDisplay.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWhiteDie1Value, getWhiteDie2Value, getRedDieValue, getYellowDieValue, getGreenDieValue, getBlueDieValue } from '../../redux/selectors/diceSelectors';
import { rollDice } from '../../redux/actions/diceActions';
import { checkBox } from '../../redux/actions/boxActions';
import r1 from '../../../public/assets/dice-faces/r1.png';
import r2 from '../../../public/assets/dice-faces/r2.png';
import r3 from '../../../public/assets/dice-faces/r3.png';
import r4 from '../../../public/assets/dice-faces/r4.png';
import r5 from '../../../public/assets/dice-faces/r5.png';
import r6 from '../../../public/assets/dice-faces/r6.png';
import y1 from '../../../public/assets/dice-faces/y1.png';
import y2 from '../../../public/assets/dice-faces/y2.png';
import y3 from '../../../public/assets/dice-faces/y3.png';
import y4 from '../../../public/assets/dice-faces/y4.png';
import y5 from '../../../public/assets/dice-faces/y5.png';
import y6 from '../../../public/assets/dice-faces/y6.png';
import g1 from '../../../public/assets/dice-faces/g1.png';
import g2 from '../../../public/assets/dice-faces/g2.png';
import g3 from '../../../public/assets/dice-faces/g3.png';
import g4 from '../../../public/assets/dice-faces/g4.png';
import g5 from '../../../public/assets/dice-faces/g5.png';
import g6 from '../../../public/assets/dice-faces/g6.png';
import b1 from '../../../public/assets/dice-faces/b1.png';
import b2 from '../../../public/assets/dice-faces/b2.png';
import b3 from '../../../public/assets/dice-faces/b3.png';
import b4 from '../../../public/assets/dice-faces/b4.png';
import b5 from '../../../public/assets/dice-faces/b5.png';
import b6 from '../../../public/assets/dice-faces/b6.png';
import w1 from '../../../public/assets/dice-faces/w1.png';
import w2 from '../../../public/assets/dice-faces/w2.png';
import w3 from '../../../public/assets/dice-faces/w3.png';
import w4 from '../../../public/assets/dice-faces/w4.png';
import w5 from '../../../public/assets/dice-faces/w5.png';
import w6 from '../../../public/assets/dice-faces/w6.png';
import { getBothActions } from '../../redux/selectors/actionsSelectors';
import { clearActions } from '../../redux/actions/actionsActions';

export default function DiceDisplay(){
  const dispatch = useDispatch();

  const white1 = useSelector(getWhiteDie1Value);
  const white2 = useSelector(getWhiteDie2Value);
  const red = useSelector(getRedDieValue);
  const yellow = useSelector(getYellowDieValue);
  const green = useSelector(getGreenDieValue);
  const blue = useSelector(getBlueDieValue);

  const dice = { r1, r2, r3, r4, r5, r6, y1, y2, y3, y4, y5, y6, g1, g2, g3, g4, g5, g6, b1, b2, b3, b4, b5, b6, w1, w2, w3, w4, w5, w6 };

  const actions = useSelector(getBothActions);
  const takeActions = () => {
    actions.forEach(action => dispatch(checkBox(action[0], action[1])));
    dispatch(clearActions());
  };
  

  return (
    <section className={styles.DiceDisplay}>
      <img src={dice['r' + red]}></img>
      <img src={dice['y' + yellow]}></img>
      <img src={dice['g' + green]}></img>
      <img src={dice['b' + blue]}></img>
      <img src={dice['w' + white1]}></img>
      <img src={dice['w' + white2]}></img>
      <button onClick={() => dispatch(rollDice())}>Roll</button>
      <button onClick={takeActions}>Confirm</button>
      <button>End Game</button>
    </section>
  );
}
