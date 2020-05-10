import React from "react";

import "./index.scss";

import big from "./pics/Шапка.png";
import comp from "./pics/Комп.png";

import opitPic from "./pics/3+.png";
import prjsPic from "./pics/50.png";
import nonstopPic from "./pics/24на7.png";
import balarsPic from "./pics/12.png";

import techs from "./pics/Технологии.png";
import comp2 from "./pics/Комп2.png";

import boy from "./pics/Пацык.png";
import girl from "./pics/Телка.png";

const cases = [{}, {}, {}, {}];

const values = [
	{
		text: "ГОДА ОПЫТА",
		pic: opitPic
	},
	{
		text: "ПРОЕКТОВ",
		pic: prjsPic
	},
	{
		text: "БЕЗ ВЫХОДНЫХ",
		pic: nonstopPic
	},
	{
		text: "СОТРУДНИКОВ",
		pic: balarsPic
	}
];

export default () => {
	return (
		<div className="FuckingSmm">
			<img className="big" src={big} />
			<div className="header">
				<span className="top">Что такое</span>
				<h1 className="middle">SMM и ТАРГЕТИНГ</h1>
				<span className="bottom">и с чем его едят...</span>
			</div>
			<div className="case-wrapper">
				<button className="gradient case">ВЫБРАТЬ СВОЙ КЕЙС</button>
			</div>
			<h2 className="main-header">ЧТО МЫ МОЖЕМ СДЕЛАТЬ ДЛЯ ВАС</h2>
			<img className="simple-pic" src={comp} />
			<div className="values">
				<h2 className="label">ЦИФРЫ СКАЖУТ ВСЕ ЗА НАС</h2>
				<div className="items">
					{values.map(item => {
						return (
							<div className="item">
								<img src={item.pic} className="pic" />
								<span className="text">{item.text}</span>
							</div>
						);
					})}
				</div>
			</div>
			<h2 className="main-header">КАКИЕ ТЕХНОЛОГИИ МЫ ИСПОЛЬЗУЕМ</h2>
			<img className="simple-pic" src={techs} />

			<h2 className="main-header your-case">ВЫБЕРИ СВОЙ КЕЙС</h2>
			<div className="cases-grid">
				{cases.map(item => {
					return (
						<div className="case-item">
							<div className="head"></div>
							<button className="yellow price">
								УЗНАТЬ ЦЕНУ
							</button>
						</div>
					);
				})}
			</div>
			<div className="order-site">
				<div className="left">
					<div className="text">
						<span className="top">ЗАКАЖИ САЙТ И ПОЛУЧИ</span>
						<p className="bottom">
							БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПО ЕГО ПРОДВИЖЕНИЮ ЧЕРЕЗ SMM
							И МАРКЕТИНГ
						</p>
					</div>
					<button className="blue get-site">ЗАКАЗАТЬ</button>
				</div>
				<img className="right" src={comp2} />
			</div>
			<img className="boy" src={boy} />
			<img className="girl" src={girl} />
		</div>
	);
};
