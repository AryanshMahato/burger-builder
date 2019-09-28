import React from 'react'

import CButton from '../../UI/Button/Button'
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
      <p style={{ textAlign: 'center' }}>
        <strong>Total Price: $ {props.price.toFixed(2)} </strong>
      </p>
      <p>Continue to checkout?</p>
      <CButton buttonType='Danger' clicked={props.purchaseCancelHandler}>
        CANCEL
      </CButton>
      <CButton buttonType='Success' clicked={props.purchaseContinueHandler}>
        ORDER
      </CButton>
    </Aux>
  )
}

export default orderSummary
