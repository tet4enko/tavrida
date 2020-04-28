import React from "react";

import MainSlider from "./MainSlider/MainSlider.js";
import ServicesGrid from "./ServicesGrid/ServicesGrid.js";
import Blablabla from "./Blablabla/Blablabla.js";
import Order from "./Order/Order.js";

import "./index.scss";

export default () => {
	return (
		<React.Fragment>
			<MainSlider />
			<ServicesGrid />
			<Blablabla />
			<Order />
		</React.Fragment>
	);
};
