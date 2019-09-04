import React from 'react'

import style from './Burger.module.css'
import BurgerIngredient from './Burger Ingredients/BurgerIngredients'

const burger = props => {
  // const transformendIngredients = Object.keys(props.ingredients).map(igkey => {
  //   return [...Array(props.ingredients[igkey])].map((_, i) => {
  //     return <BurgerIngredient key={i + igkey} type={igkey} />
  //   })
  // })
  //Hard Way Taught by Maxi sir

  let nSalad = props.ingredients.salad
  let nBacon = props.ingredients.bacon
  let nCheese = props.ingredients.cheese
  let nMeat = props.ingredients.meat

  const ingredients = []

  const transformendIngredients = () => {
    for (let i = 0; i < nSalad; i++) {
      ingredients.push(
        <BurgerIngredient type="salad" key={ingredients.length} />
      )
    }
    for (let i = 0; i < nBacon; i++) {
      ingredients.push(
        <BurgerIngredient type="bacon" key={ingredients.length} />
      )
    }
    for (let i = 0; i < nCheese; i++) {
      ingredients.push(
        <BurgerIngredient type="cheese" key={ingredients.length} />
      )
    }
    for (let i = 0; i < nMeat; i++) {
      ingredients.push(
        <BurgerIngredient type="meat" key={ingredients.length} />
      )
    }
  }

  transformendIngredients()

  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.map(value => value)}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
