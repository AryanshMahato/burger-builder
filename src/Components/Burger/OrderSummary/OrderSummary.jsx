import React from 'react'

import Aux from '../../../HOC/Auxillary'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredient).map((igkey) => (
    <li>
      <span style={{ textTransform: 'capitalize' }}>{igkey}</span>:{' '}
      {props.ingredient[igkey]}
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
