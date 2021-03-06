import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Header from "./../common/Header/Header";
import SuperFooter from "./../common/SuperFooter/SuperFooter.js";

import General from "./../pages/general";
import { component as Outdoor } from "./../pages/outdoor";
import { component as Polygraphy } from "./../pages/polygraphy";
import { component as Suvenirka } from "./../pages/suvenirka";
import Cleaning from "./../pages/cleaning";
import Smm from "./../pages/smm";
import Web from "./../pages/web";
import Design from "./../pages/design";

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
					<Route path="/uslugi/suvenirka">
						<Header general={false} />
						<Suvenirka />
					</Route>
					<Route path="/uslugi/cleaning">
						<Header general={false} />
						<Cleaning />
					</Route>
					<Route path="/uslugi/smm">
						<Header general={false} />
						<Smm />
					</Route>
					<Route path="/uslugi/web">
						<Header general={false} />
						<Web />
					</Route>
					<Route path="/uslugi/design">
						<Header general={false} />
						<Design />
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
