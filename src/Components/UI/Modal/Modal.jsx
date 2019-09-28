import React from 'react'
import classes from './Modal.module.css'

import Aux from '../../../HOC/Auxillary'
import Backdrop from '../Backdrop/Backdrop'

const modal = props => (
  <Aux>
    <Backdrop show={props.show} backdropClicked={props.backdropClicked} />
    <div
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}
      className={classes.Modal}
    >
      {props.children}
    </div>
  </Aux>
)

export default modal
