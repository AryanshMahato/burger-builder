import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const Controls = [
  { label: 'Salad', type: 'salad', disable: false },
  { label: 'Bacon', type: 'bacon', disable: false },
  { label: 'Cheese', type: 'cheese', disable: false },
  { label: 'Meat', type: 'meat', disable: false }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {Controls.map(ctrl => (
      <BuildControl
        label={ctrl.label}
        key={ctrl.type}
        addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)}
        disable={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.orderStatus}
      type='button'
      onClick={props.ordering}
    >
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
