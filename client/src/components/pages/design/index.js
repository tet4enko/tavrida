import React from "react";

import "./index.scss";

import back from "./pics/Фон.png";
import galactic from "./pics/Кольца.png";

import sun from "./pics/Логотип.png";
import copyright from "./pics/Копирайтинг.png";
import upakovka from "./pics/Упаковка.png";
import slogans from "./pics/Слоганы.png";
import style from "./pics/Фирменный стиль.png";
import branding from "./pics/Брендинг.png";
import naming from "./pics/Нейминг.png";
import click from "./pics/Клик.png";

import graphics from "./pics/Графика.png";
import graphics2 from "./pics/Графика2.png";
import articles from "./pics/Статьи.png";
import articles2 from "./pics/Статьи2.png";
import approach from "./pics/Подход.png";
import approach2 from "./pics/Подход2.png";

import ProductsSlider from "./../../common/ProductsSlider/ProductsSlider.js";

const uslugi = [
	{
		slug: "sun",
		name: "логотип",
		pic: sun
	},
	{
		slug: "copyright",
		name: "копирайтинг",
		pic: copyright
	},
	{
		slug: "upakovka",
		name: "упаковка",
		pic: upakovka
	},
	{
		slug: "slogans",
		name: "слоганы",
		pic: slogans
	},
	{
		slug: "style",
		name: "фирменный стиль",
		pic: style
	},
	{
		slug: "branding",
		name: "брендинг",
		pic: branding
	},
	{
		slug: "naming",
		name: "нейминг",
		pic: naming
	}
];

const dela = [
	{
		name: "Графика",
		text:
			"Мы делаем каждый бренд уникальным. Наша графика затрагивает сердца и души. Промышленный, значит для людей. Наши презентации хранят и пересматривают.",
		pics: [graphics, graphics2]
	},
	{
		name: "Статьи",
		text:
			"Мы делаем каждый бренд уникальным. Наша графика затрагивает сердца и души. Промышленный, значит для людей. Наши презентации хранят и пересматривают.",
		pics: [articles, articles2]
	},
	{
		name: "Подход",
		text:
			"Мы делаем каждый бренд уникальным. Наша графика затрагивает сердца и души. Промышленный, значит для людей. Наши презентации хранят и пересматривают.",
		pics: [approach, approach2]
	}
];

export default () => {
	return (
		<div className="Design">
			<img className="back" src={back} />
			<h1 className="label">
				<span className="top">ДИЗАЙН</span>
				<span className="bottom">КОТОРЫЙ ЗАПОМНИТСЯ КЛИЕНТУ</span>
			</h1>
			<h2 className="what">Что мы можем?</h2>
			<div className="galactic">
				<img className="kolca" src={galactic} />
				<ol className="items">
					{uslugi.map(item => (
						<li className={`item ${item.slug}`}>
							<img className="pic" src={item.pic} />
							<span className="label">
								{item.name.toUpperCase()}
							</span>
						</li>
					))}
				</ol>
				<img className="clck" src={click} />
			</div>
			<ol className="dela">
				{dela.map(item => (
					<li className="delo">
						<div className="pic-wrapper">
							<img className="pic1" src={item.pics[0]} />
							<img className="pic2" src={item.pics[1]} />
						</div>
						<div className="name">{item.name.toUpperCase()}</div>
						<div className="text">{item.text}</div>
					</li>
				))}
			</ol>
			<h2 className="projects">НАШИ ПРОЕКТЫ</h2>
			<ProductsSlider textColor="#fff" />
			<div className="your">
				<h2 className="your-design">А КАКИМ БУДЕТ ТВОЙ ДИЗАЙН?</h2>
				<div className="btns">
					<button className="idea">ПОДЕЛИСЬ СВОЕЙ ИДЕЕЙ</button>
					<button className="price yellow">УЗНАЙ ЦЕНУ</button>
				</div>
			</div>
		</div>
	);
};
