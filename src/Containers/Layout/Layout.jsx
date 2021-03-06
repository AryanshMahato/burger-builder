import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../../HOC/Auxillary'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../Components/Navigation/Side Drawer/SideDrawer'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSideBar: false
    }
  }

  backdropClickHandler = () => {
    this.setState({ showSideBar: false })
  }

  menuClickHandler = () => {
    this.setState({ showSideBar: true })
  }

  render() {
    return (
      <Aux>
        <Toolbar menuClickHandler={this.menuClickHandler} />
        <SideDrawer
          open={this.state.showSideBar}
          backdropClicked={this.backdropClickHandler}
        />
        <div>SideDrawer, Backdrop</div>
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    )
  }
}

export default Layout
