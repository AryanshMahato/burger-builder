import React from 'react'
import classes from './Toolbar.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/Navigation items'

const toolbar = props => (
  <header className={classes.Toolbar}>
    <div>MENU</div>
    <Logo />
    <NavigationItems />
  </header>
)

export default toolbar