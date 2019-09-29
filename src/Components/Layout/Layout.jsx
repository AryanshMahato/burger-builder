import React, { Component } from 'react'
import classes from './Layout.module.css'

import Aux from '../../HOC/Auxillary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Side Drawer/SideDrawer'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSideBar: true
    }
  }

  backdropClickHandler = () => {
    this.setState({ showSideBar: false })
  }

  render() {
    return (
      <Aux>
        <Toolbar />
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
