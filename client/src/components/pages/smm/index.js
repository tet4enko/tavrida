import React from "react";

import "./index.scss";

import big from "./pics/Шапка.png";
import comp1 from "./pics/С1.png";
import comp2 from "./pics/С2.png";
import comp3 from "./pics/С3.png";

import opitPic from "./pics/3+.png";
import prjsPic from "./pics/50.png";
import nonstopPic from "./pics/24на7.png";
import balarsPic from "./pics/12.png";

import techs from "./pics/Технологии.png";

import boy from "./pics/Пацык.png";
import girl from "./pics/Телка.png";

import CasesGrid from "./../../common/CasesGrid/CasesGrid.js";
import GetSite from "./../../common/GetSite/GetSite.js";

const cases = [{}, {}, {}, {}];

const comps = [comp1, comp2, comp3];

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
	const [compsIndex, setCompsIndex] = React.useState(0);

	const getNextIndex = index_ => {
		let result;

		result = index_ + 1;
		if (result >= comps.length) {
			result = 0;
		}

		return result;
	};

	const toggle = () => {
		setCompsIndex(getNextIndex(compsIndex));
	};

	React.useEffect(() => {
		setTimeout(toggle, 4000);
	}, [compsIndex]);

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
			<div className="comps">
				{comps.map((comp, index) => (
					<img
						className={`simple-pic comp ${
							index === compsIndex ? "visible" : ""
						}`}
						src={comps[index]}
					/>
				))}
			</div>
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
			<CasesGrid cases={cases} />
			<GetSite />
			<img className="boy" src={boy} />
			<img className="girl" src={girl} />
		</div>
	);
};
