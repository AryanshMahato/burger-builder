import React, { Component } from 'react';
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';

export default class Checkout extends Component {
	state = {
		ingredients: {
			salad: 1,
			meat: 1,
			cheese: 1,
			bacon: 1
		}
	};

	componentDidMount() {
		const query = this.getUrlParams(this.props.location.search);
		this.setState({ ingredients: query });
	}

	getUrlParams(search) {
		const hashes = search.slice(search.indexOf('?') + 1).split('&');
		const params = {};
		hashes.map(hash => {
			const [key, val] = hash.split('=');
			params[key] = decodeURIComponent(val);
		});
		return params;
	}

	checkoutCancelHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinueHandler = () => {
		alert('Ordered');
	};

	render() {
		return (
			<div>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutCancelHandler={this.checkoutCancelHandler}
					checkoutContinueHandler={this.checkoutContinueHandler}
				/>
			</div>
		);
	}
}
