import React from 'react'

import Aux from '../../../HOC/Auxillary'

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredient).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
      {props.ingredient[igKey]}
    </li>
  ))

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delecious burger with following order: </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
    </Aux>
  )
}

export default orderSummary
