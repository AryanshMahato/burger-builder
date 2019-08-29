import React from 'react';
import Aux from '../../HOC/Auxillary'
import style from './Layout.module.css'

const layout = props => (
  <Aux>
    <div className={style.Content}>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Aux>
)

export default layout