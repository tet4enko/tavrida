import React from "react";

import "./Calc.scss";

import calc from "./Калькулятор.png";

export default () => {
	return (
		<div className="Calc section page-content">
			<div className="pic-wrapper">
				<img className="pic" src={calc} />
			</div>
			<div className="right">
				<div className="text-wrapper">
					<div className="title">
						Любите держать все под контролем?
					</div>
					<div className="desc">
						Воспользуйтесь нашим калькулятором расчета стоимости для
						лучшей агрегации своих возможностей
					</div>
					<div className="button-wrapper">
						<button className="yellow">ОТКРЫТЬ</button>
					</div>
				</div>
			</div>
		</div>
	);
};
