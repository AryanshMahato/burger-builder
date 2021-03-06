import React from 'react'
import classes from './NavigationItems.module.css'

import NavigationItem from './Navigation item/Navigation item'

const navigationItems = props => (
  <ul className={classes.NavItems}>
    <NavigationItem link='/' active>
      Burger Builder
    </NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
)

export default navigationItems
