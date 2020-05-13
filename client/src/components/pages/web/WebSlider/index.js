import React, { Component } from "react";

import "./index.scss";

import leftComp from "./pics/Комп1.png";
import rightComp from "./pics/Комп2.png";

const design = [
	{
		label: "1. Исследование",
		desc: "Анализ трендов и конкурентов, сборк и оценка данных"
	},
	{
		label: "2. Прототип",
		desc: "Проработка сценариев заказчика, поиск оптимальных решений"
	},
	{
		label: "3. Дизайн",
		desc: "Создание макета, доработка всех деталей, подготовка к верстке"
	}
];

const code = [
	{
		label: "1. Архитектура сайта",
		desc:
			"Системный архитектор продумывет архитектуру сайта и учтывает все нюансы"
	},
	{
		label: "2. Программирование",
		desc:
			"Программист свяжет компоненты  и модули в единый, четко отлаженный механизм"
	},
	{
		label: "3. Тестирование",
		desc:
			"Чтобы сайт был идеальным тестировщик проверит все ли учтено в его реализации"
	}
];

class WebSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: "normal"
		};
	}

	render() {
		return (
			<div className={`WebSlider ${this.state.position}`}>
				<div className="left">
					<img className="comp" src={leftComp}></img>
					<div className="preview-content">
						<span className="label">
							ПРЕВОСХОДНЫЙ
							<br />
							ДИЗАЙН
						</span>
						<button
							className="btn more"
							onClick={() => {
								this.setState({
									position: "start start-right"
								});
								setTimeout(() => {
									this.setState({
										position: "end end-right"
									});
								}, 200);
							}}
						>
							УЗНАТЬ БОЛЬШЕ
						</button>
					</div>
					<div className="full-content">
						<span className="label">
							ПРЕВОСХОДНЫЙ
							<br />
							ДИЗАЙН
						</span>
						<ol className="items">
							{design.map(item => (
								<li className="item">
									<h6 className="label">{item.label}</h6>
									<p className="desc">{item.desc}</p>
								</li>
							))}
						</ol>
						<div className="btns">
							<button className="btn price">УЗНАТЬ ЦЕНУ</button>
							<button
								className="btn blue back"
								onClick={() => {
									this.setState({
										position: "back back-right"
									});
									setTimeout(() => {
										this.setState({
											position: "normal"
										});
									}, 220);
								}}
							>
								ВЕРНУТЬСЯ
							</button>
						</div>
					</div>
				</div>
				<div className="right">
					<img className="comp" src={rightComp}></img>
					<div className="preview-content">
						<span className="label">
							ИДЕАЛЬНЫЙ
							<br />
							КОД
						</span>
						<button
							className="btn more yellow"
							onClick={() => {
								this.setState({ position: "start start-left" });
								setTimeout(() => {
									this.setState({ position: "end end-left" });
								}, 200);
							}}
						>
							УЗНАТЬ БОЛЬШЕ
						</button>
					</div>
					<div className="full-content">
						<span className="label">
							ИДЕАЛЬНЫЙ
							<br />
							КОД
						</span>
						<ol className="items">
							{code.map(item => (
								<li className="item">
									<h6 className="label">{item.label}</h6>
									<p className="desc">{item.desc}</p>
								</li>
							))}
						</ol>
						<div className="btns">
							<button
								className="btn yellow back"
								onClick={() => {
									this.setState({
										position: "back back-left"
									});
									setTimeout(() => {
										this.setState({
											position: "normal"
										});
									}, 220);
								}}
							>
								ВЕРНУТЬСЯ
							</button>
							<button className="btn price">УЗНАТЬ ЦЕНУ</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default WebSlider;
