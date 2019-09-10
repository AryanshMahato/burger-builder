import React, { Component } from 'react'
import Aux from '../../HOC/Auxillary'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalprice: 4,
    purchaseable: false
  }

  componentDidMount = () => {
  }

  updatePurchaseState(mIngredients) {
    let sum = 0;
    for (let key in mIngredients) {
      sum = sum + mIngredients[key]
      console.log(mIngredients[key]);
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

  addIngredientHandler = type => {
    const mIngredients = { ...this.state.ingredients }
    ++mIngredients[type]
    let increment = this.calculatePrice(type)
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
    --mIngredients[type]
    this.setState({
      ingredients: mIngredients
    })
    let decrement = this.calculatePrice(type)
    this.setState({
      ingredients: mIngredients,
      totalprice: this.state.totalprice - decrement
    })
    this.updatePurchaseState(mIngredients)

  }

  calculatePrice = (type) => {
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
  }


  render() {

    const disabledInfo = { ...this.state.ingredients }
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalprice}
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
          orderStatus={this.state.purchaseable}
        />
      </Aux>
    )
  }
}


export default BurgerBuilder
