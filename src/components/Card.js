import React from 'react';
import './Card.css';

function Card(props) {
  // To get the styles from Expenseitem.css
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
