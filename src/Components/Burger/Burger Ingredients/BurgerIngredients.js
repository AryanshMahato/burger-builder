import React, { Component } from 'react'

import style from './BurgerIngredients.module.css'
import PropTypes from 'prop-types'

class BurgerIngredients extends Component {
  render() {
    this.ingredients = null

    switch (this.props.type) {
      case 'bread-bottom':
        this.ingredients = <div className={style.BreadBottom}></div>
        break

      case 'bread-top':
        this.ingredients = (
          <div className={style.BreadTop}>
            <div className={style.Seeds1}></div>
            <div className={style.Seeds2}></div>
          </div>
        )
        break

      case 'meat':
        this.ingredients = <div className={style.Meat}></div>
        break

      case 'salad':
        this.ingredients = <div className={style.Salad}></div>
        break

      case 'cheese':
        this.ingredients = <div className={style.Cheese}></div>
        break

      case 'bacon':
        this.ingredients = <div className={style.Bacon}></div>
        break

      default:
        this.ingredients = null
        break
    }
    return this.ingredients
  }
}

BurgerIngredients.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredients
