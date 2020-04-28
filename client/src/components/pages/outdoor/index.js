import React from "react";

import ServiceCaption from "./../../common/ServiceCaption/ServiceCaption.js";
import ServicesSlider from "./../../common/ServicesSlider/ServicesSlider.js";
import ServiceList from "./../../common/ServiceList/ServiceList.js";
import Zamer from "./Zamer/Zamer.js";

import "./index.scss";

import lightbox from "./pics/Лайтбокс.png";
import liters from "./pics/Буквы.png";
import banner from "./pics/Баннер.png";
import plenka from "./pics/Пленка.png";
import auto from "./pics/Авто.png";
import wall from "./pics/Бренд волл.png";
import shtender from "./pics/Штендер.png";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

const services = [
	{
		name: "Лайтбокс",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: lightbox
	},
	{
		name: "Световые буквы",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: liters
	},
	{
		name: "Баннер",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: banner
	},
	{
		name: "Пленка",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: plenka
	},
	{
		name: "Брендирование авто",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: auto
	},
	{
		name: "Бренд-волл",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: wall
	},
	{
		name: "Штендер",
		shortText: loremIpsum,
		longText:
			"longText longText longText longText longText longText longText longText longText longText longText longText longText longText ",
		pic: shtender
	}
];

export default () => {
	return (
		<div className="Outdoor page-wrapper page-content service-page-type-1">
			<ServiceCaption
				caption="наружная реклама"
				description={
					<React.Fragment>
						Важно помнить, что <b>наружная реклама</b> является
						одним из наиболее эффективных методов привлечения
						клиентов.
					</React.Fragment>
				}
			/>
			<ServicesSlider services={services} />
			<Zamer />
			<ServiceList services={services} />
			<div className="baloon top"></div>
			<div className="baloon bottom"></div>
		</div>
	);
};
