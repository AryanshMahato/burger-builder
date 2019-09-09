import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const Controls = [
  { label: 'Salad', type: 'salad', disable: false },
  { label: 'Bacon', type: 'bacon', disable: false },
  { label: 'Cheese', type: 'cheese', disable: false },
  { label: 'Meat', type: 'meat', disable: false }
]


const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {
        Controls.map(ctrl => {
          return (
            <BuildControl
              label={ctrl.label}
              key={ctrl.type}
              addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
              removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)}
              disable={props.disabled[ctrl.type]}
            />
          )
        })
      }
    </div>
  )
}

export default buildControls