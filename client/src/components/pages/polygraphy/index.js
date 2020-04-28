import React from "react";

import ServiceCaption from "./../../common/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../common/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../common/ServiceList/ServiceList.js";

import "./index.scss";

import vizitki from "./pics/Визитки.png";
import flaera from "./pics/Флаера.png";
import plenka from "./pics/Пленка.png";
import cards from "./pics/Карты.png";
import calendars from "./pics/Календарь.png";
import notedaps from "./pics/Блокнот.png";
import paketi from "./pics/Пакет.png";
import upakovki from "./pics/Упаковка.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Визитки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: vizitki
	},
	{
		name: "Флаера и листовки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: flaera
	},
	{
		name: "Печать на пленке",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: plenka
	},
	{
		name: "Пластиковые карты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: cards
	},
	{
		name: "Календари",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: calendars
	},
	{
		name: "Блокноты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: notedaps
	},
	{
		name: "Пакеты",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: paketi
	},
	{
		name: "Упаковки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: upakovki
	}
];

export default () => {
	return (
		<div className="Polygraphy page-wrapper page-content service-page-type-1">
			<ServiceCaption caption="полиграфия" description="" />
			<ServicesSlider services={services} />
			<ServiceList services={services} />
			<div className="baloon top"></div>
			<div className="baloon bottom"></div>
		</div>
	);
};
