import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './Containers/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';

class App extends Component {
	render() {
		return (
			<div>
				<Layout>
					<Switch>
						<Route path='/' exact component={BurgerBuilder} />
						<Route path='/checkout' exact component={Checkout} />
					</Switch>
				</Layout>
			</div>
		);
	}
}

export default App;
