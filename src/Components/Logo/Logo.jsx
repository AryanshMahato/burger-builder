import React from 'react';
import classes from './Logo.module.css';

import bugerLogo from '../../Assets/Images/burger-logo.png';

const logo = prop => (
  <div className={classes.Logo}>
    <img src={bugerLogo} alt='MyBurger' />
  </div>
);

export default logo;
