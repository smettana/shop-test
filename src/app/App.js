import React, { Component } from 'react';
import '../scss/App.scss';

import Home from './containers/Home';
import Add from './containers/Add';

import AccessBlock from './components/AccessBlock'
import Header from './components/Header';
import Footer from './components/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";


class App extends Component {
	state = {
		admin: true
	}
	render() {
		const { admin } = this.state;
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home admin={admin} />
					</Route>
					<Route path="/add">
						{admin ? <Add admin={admin} /> : <AccessBlock />}
					</Route>
				</Switch>
				<Footer />
			</Router>
		)

	}
}

export default App;
