import React from 'react'
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/Navigation items'

const sideDrawer = props => (
  <div className={classes.SideDrawer}>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </div>
)

export default sideDrawer
