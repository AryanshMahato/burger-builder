import React from 'react'
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo'
import NavigationItems from '../Navigation Items/Navigation items'
import Aux from '../../../HOC/Auxillary'
import Backdrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = props => {
  let attachedClass = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachedClass = [classes.SideDrawer, classes.Open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} backdropClicked={props.backdropClicked} />
      <div className={attachedClass.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  )
}

export default sideDrawer
