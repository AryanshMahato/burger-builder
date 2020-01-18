import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.module.css';

export default function CheckoutSummary(props) {
	return (
		<div className={classes.CheckoutSummary}>
			<h1>We hope it tastes well</h1>
			<div style={{ width: '100%', height: '550px', margin: 'auto' }}>
				<Burger ingredients={props.ingredients} />
			</div>
			<Button buttonType='Danger' clicked={props.checkoutCancelHandler}>
				CANCEL
			</Button>
			<Button buttonType='Success' clicked={props.checkoutContinueHandler}>
				CONTINUE
			</Button>
		</div>
	);
}
