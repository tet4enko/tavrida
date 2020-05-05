import React from "react";

import ServiceCaption from "./../../common/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../common/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../common/ServiceList/ServiceList.js";

import "./index.scss";

import vizitki from "./pics/1.png";
import flaera from "./pics/2.png";
import plenka from "./pics/3.png";
import cards from "./pics/4.png";
import calendars from "./pics/5.png";
import notedaps from "./pics/6.png";
import paketi from "./pics/7.png";
import upakovki from "./pics/8.png";

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

const component = () => {
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

export { component, services };
