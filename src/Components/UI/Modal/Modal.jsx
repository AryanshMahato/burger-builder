import React, { Component } from 'react';
import classes from './Modal.module.css';

import Aux from '../../../HOC/Auxillary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  // constructor(props) {
  //   super(props)
  // }

  shouldComponentUpdate = (nextProps, nextState) => {
    const propsChange = nextProps.children !== this.props.children;

    return nextProps.show !== this.props.show || propsChange;
  };

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.props.show}
          backdropClicked={this.props.backdropClicked}
        />
        <div
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
          className={classes.Modal}
        >
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;
