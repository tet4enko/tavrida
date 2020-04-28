import React from "react";

import ServiceCaption from "./../../common/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../common/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../common/ServiceList/ServiceList.js";

import "./index.scss";

import futbolki from "./pics/Футболки.png";
import chehli from "./pics/Чехлы.png";
import krujki from "./pics/Кружки.png";
import beisbolki from "./pics/Кепки.png";
import rukzaki from "./pics/Рюкзаки.png";
import fleshki from "./pics/Флешка.png";
import ruchki from "./pics/Ручки.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Футболки и поло",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: futbolki
	},
	{
		name: "Чехлы",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: chehli
	},
	{
		name: "Кружки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: krujki
	},
	{
		name: "Бейсболки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: beisbolki
	},
	{
		name: "Рюкзаки и сумки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: rukzaki
	},
	{
		name: "Флешки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: fleshki
	},
	{
		name: "Ручки",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: ruchki
	}
];

export default () => {
	return (
		<div className="Suvenirka page-wrapper page-content service-page-type-1">
			<ServiceCaption caption="сувенирная продукция" description="" />
			<ServicesSlider services={services} />
			<ServiceList services={services} />
			<div className="baloon top"></div>
			<div className="baloon bottom"></div>
		</div>
	);
};
