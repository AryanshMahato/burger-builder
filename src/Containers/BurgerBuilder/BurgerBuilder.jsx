/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react'
import Aux from '../../HOC/Auxillary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'

class BurgerBuilder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      totalprice: 4,
      purchaseable: false,
      purchasing: false
    }
  }

  calculatePrice = type => {
    if (type === 'salad') {
      return 0.5
    }
    if (type === 'bacon') {
      return 0.9
    }
    if (type === 'cheese') {
      return 0.7
    }
    if (type === 'meat') {
      return 1.2
    }
    return 0
  }

  addIngredientHandler = type => {
    const mIngredients = { ...this.state.ingredients }
    mIngredients[type] += 1
    const increment = this.calculatePrice(type)
    this.setState({
      ingredients: mIngredients,
      totalprice: this.state.totalprice + increment
    })
    this.updatePurchaseState(mIngredients)
  }

  removeIngredientHandler = type => {
    const mIngredients = { ...this.state.ingredients }
    if (mIngredients[type] === 0) {
      return
    }
    mIngredients[type] -= 1
    this.setState({
      ingredients: mIngredients
    })
    const decrement = this.calculatePrice(type)

    this.setState({
      ingredients: mIngredients,
      totalprice: this.state.totalprice - decrement
    })
    this.updatePurchaseState(mIngredients)
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    // eslint-disable-next-line no-alert
    alert('Order Placed')
  }

  updatePurchaseState(mIngredients) {
    let sum = 0
    // eslint-disable-next-line no-unused-vars
    for (const key in mIngredients) {
      sum += mIngredients[key]
    }

    if (sum >= 1) {
      this.setState({
        purchaseable: true
      })
    } else {
      this.setState({
        purchaseable: false
      })
    }
  }

  render() {
    const disabledInfo = { ...this.state.ingredients }
    // eslint-disable-next-line no-unused-vars
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          backdropClicked={this.purchaseCancelHandler}
        >
          <OrderSummary
            ingredient={this.state.ingredients}
            purchaseCancelHandler={this.purchaseCancelHandler}
            purchaseContinueHandler={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalprice}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
          orderStatus={this.state.purchaseable}
          ordering={this.purchaseHandler}
        />
      </Aux>
    )
  }
}

export default BurgerBuilder
