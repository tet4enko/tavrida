import React from "react";

import "./index.scss";

import WebSlider from "./WebSlider";
import CasesGrid from "./../../common/CasesGrid/CasesGrid.js";
import GetSite from "./../../common/GetSite/GetSite.js";

import roboeb from "./pics/Робоеб.png";

const cases = [
	{
		label: "Лендинг до 4-х экранов"
	},
	{
		label: "Лендинг до 8-10 экранов"
	},
	{
		label: "Корпоративный сайт"
	},
	{
		label: "Сайт услуг"
	},
	{
		label: "Интернет-магазин"
	},
	{
		label: "Сложный веб-проект"
	}
];

export default () => {
	return (
		<div className="Web">
			<WebSlider />
			<h2 className="main-header">ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ</h2>
			<img className="simple-pic roboeb" src={roboeb} />
			<h2 className="main-header">ВЫБЕРИ СВОЙ КЕЙС</h2>
			<CasesGrid cases={cases} />
			<GetSite />
		</div>
	);
};
