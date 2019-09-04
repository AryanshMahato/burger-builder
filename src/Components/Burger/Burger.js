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

  const transformendIngredients = () => {
    for (let i = 0; i < nSalad; i++) {
      nSalad = <BurgerIngredient type={'salad'} />
    }
    for (let i = 0; i < nBacon; i++) {
      nBacon = <BurgerIngredient type={'bacon'} />
    }
    for (let i = 0; i < nCheese; i++) {
      nCheese = <BurgerIngredient type={'cheese'} />
    }
    for (let i = 0; i < nMeat; i++) {
      nMeat = <BurgerIngredient type={'meat'} />
    }
  }

  transformendIngredients()

  return (
    <div className={style.Burger}>
      <BurgerIngredient type="bread-top" />
      {nSalad}
      {nBacon}
      {nCheese}
      {nMeat}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

export default burger
