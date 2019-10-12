import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = props => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>

    <button
      className={classes.Less}
      onClick={props.removeIngredientHandler}
      disabled={props.disable}
      type='button'
    >
      Less
    </button>

    <button
      className={classes.More}
      onClick={props.addIngredientHandler}
      type='button'
    >
      More
    </button>
  </div>
);

export default buildControl;
