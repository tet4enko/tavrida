import React, { Component } from "react";
import "./ServicesGrid.scss";

const images = [];

for (let i = 1; i <= 7; i++) {
	images.push(require(`./img/${i}.png`));
}

const line1 = [
	{ label: "НАРУЖНАЯ РЕКЛАМА", color: "orange", img: 1 },
	{ label: "ПОЛИГРАФИЯ", color: "blue", img: 2 },
	{ label: "СУВЕРИНРНАЯ ПРОДУКЦИЯ", color: "yellow", img: 3 },
	{ label: "КЛИНИНГ РЕКЛАМНЫХ КОНСТРУКЦИЙ", color: "orange", img: 4 }
];

const line2 = [
	{ label: "SMM и МАРКЕТИНГ", color: "blue", img: 5 },
	{ label: "РАЗРАБОТКА САЙТОВ", color: "yellow", img: 6 },
	{ label: "ДИЗАЙН", color: "orange", img: 7 }
];

class ServicesGrid extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const gridItem = data => {
			return (
				<div className="item">
					<img src={images[data.img - 1]}></img>
					<div className="label">
						<span className={`point ${data.color}`}></span>
						{data.label}
					</div>
				</div>
			);
		};

		return (
			<div className="ServicesGrid section page-content">
				<div className="general-header">
					УСЛУГИ НАШЕГО РЕКЛАМНОГО АГЕНТСТВА
				</div>
				<div className="lines">
					<div className="line">{line1.map(gridItem)}</div>
					<div className="line">{line2.map(gridItem)}</div>
				</div>
			</div>
		);
	}
}

export default ServicesGrid;
