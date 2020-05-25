import React from 'react';
import styles from './NumberBoxes.css';

export default function NumberBoxes(){
  const colors = ['red', 'yellow', 'green', 'blue'];
  const generateRow = color => {
    let numbers = [];
    if(color === 'red' || color === 'yellow'){
      for(let i = 2; i < 14; i++){
        numbers.push(i);
      }
    }
    else if(color === 'green' || color === 'blue'){
      for(let i = 13; i > 1; i--){
        numbers.push(i);
      }
    }
    return numbers.map((num, i) => (
      <li key={color + i}>
        {num}
      </li>
    ));
  };
  const boxes = colors.map(color => generateRow(color));
  console.log(boxes);

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
