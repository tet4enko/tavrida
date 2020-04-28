import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./../common/Header/Header";
import SuperFooter from "./../common/SuperFooter/SuperFooter.js";

import General from "./../pages/general";
import Outdoor from "./../pages/outdoor";
import Polygraphy from "./../pages/polygraphy";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/uslugi/naruzhnaya-reklama">
						<Header general={false} />
						<Outdoor />
					</Route>
					<Route path="/uslugi/polygraphy">
						<Header general={false} />
						<Polygraphy />
					</Route>
					<Route path="/">
						<Header general={true} />
						<General />
					</Route>
				</Switch>
				<SuperFooter />
			</Router>
		</div>
	);
}

export default App;
