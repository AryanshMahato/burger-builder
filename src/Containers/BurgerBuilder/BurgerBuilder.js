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
    }

  }

  addIngredientHandler = type => {
    const mIngredients = { ...this.state.ingredients }
    ++mIngredients[type]
    this.setState({
      ingredients: mIngredients
    })

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
          addIngredientHandler={this.addIngredientHandler}
          removeIngredientHandler={this.removeIngredientHandler}
          disabled={disabledInfo}
        />
      </Aux>
    )
  }
}


export default BurgerBuilder
