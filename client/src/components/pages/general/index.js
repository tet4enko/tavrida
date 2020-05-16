import React from "react";

import MainSlider from "./MainSlider/MainSlider.js";
import ServicesGrid from "./ServicesGrid/ServicesGrid.js";
import Blablabla from "./Blablabla/Blablabla.js";
import Order from "./Order/Order.js";
import ClientsGrid from "./ClientsGrid/ClientsGrid.js";
import Smm from "./Smm/Smm.js";
import Calc from "./Calc/Calc.js";
import Zamer from "./../../common/Zamer/Zamer.js";
import ProductsSlider from "./../../common/ProductsSlider/ProductsSlider.js";

import "./index.scss";

export default () => {
	return (
		<div className="General">
			<MainSlider />
			<ServicesGrid />
			<Zamer />
			<ProductsSlider label="УЗНАЙ О РЕКЛАМЕ БОЛЬШЕ" />
			<Smm />
			<Calc />
			<Blablabla />
			<ClientsGrid />
			<Order />
		</div>
	);
};
