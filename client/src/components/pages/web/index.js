import React from "react";

import "./index.scss";

import WebSlider from "./WebSlider";
import CasesGrid from "./../../common/CasesGrid/CasesGrid.js";
import GetSite from "./../../common/GetSite/GetSite.js";

import roboeb from "./pics/Робоеб.png";

import verstka from "./pics/Верстка.png";
import design from "./pics/Дизайн.png";
import tests from "./pics/Тесты.png";
import research from "./pics/Исследование.png";

import banner1 from "./pics/Баннер1.png";
import banner2 from "./pics/Баннер2.png";
import banner3 from "./pics/Баннер3.png";

const stages = [
	{
		pic: research,
		label: "Исследование",
		text: "Разработка оптимальный решений на основе сценариев заказчика"
	},
	{
		pic: design,
		label: "Дизайн",
		text:
			"Проектирование макета, проверка всех компонентов, подготовка к вестке"
	},
	{
		pic: verstka,
		label: "Верстка",
		text: "Верстка сайта согласно заранее согласованной концепции"
	},
	{
		pic: tests,
		label: "Тесты",
		text: "Финальная проверка работоспособности всех ссылок и блоков сайта"
	}
];

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
			<h2 className="main-header">ЭТАПЫ РАБОТЫ</h2>
			<ol className="stages">
				{stages.map(stage => (
					<li className="stage">
						<img className="back" src={stage.pic} />
						<span className="label">{stage.label}</span>
						<span className="text">{stage.text}</span>
					</li>
				))}
			</ol>
			<h2 className="main-header">ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ</h2>
			<span className="lol-text left">
				Мы используем в разработке только самые передовые инструменты и
				<br />
				фреймворки и постоянно совершенствуем свои навыки
			</span>
			<img className="simple-pic roboeb" src={roboeb} />
			<h2 className="main-header">ВЫБЕРИ СВОЙ КЕЙС</h2>
			<CasesGrid cases={cases} />
			<GetSite />
			<h2 className="main-header">
				ПОМОЖЕМ ИНТЕГРИРОВАТЬ <br />
				ВАШ БИЗНЕС
			</h2>
			<span className="lol-text right">
				Интегрируем Ваш бизнес с помощью популярных платформ, которые
				<br />
				позволяют автоматизировать процессы и повысить чистую прибыль
			</span>
			<img src={banner1} className="banner" />
			<br />
			<img src={banner2} className="banner" />
			<br />
			<img src={banner3} className="banner last" />
			<br />
		</div>
	);
};
