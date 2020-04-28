import React from "react";

import "./Zamer.scss";

import zamerPic from "./Замер.png";

export default props => {
	return (
		<div className="Zamer section">
			<div className="top">
				<div className="left">
					<h2 className="caption1">Нужна наружка?</h2>
					<span className="caption2">
						<sup>*</sup>Закажи <b>бесплатный</b> вызов замерщика
					</span>
					<br />
					<button className="call">ВЫЗВАТЬ БЕСПЛАТНО</button>
				</div>
				<img src={zamerPic} className="call-pic" height="350px"></img>
			</div>
			<span className="ogovorka">
				<sup>*</sup>Бесплатный вызов только по г. Симферополь
			</span>
		</div>
	);
};
