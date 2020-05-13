import React from "react";

import "./GetSite.scss";

import comp2 from "./pics/Комп2.png";

export default props => {
	return (
		<div className="GetSite">
			<div className="left">
				<div className="text">
					<span className="top">ЗАКАЖИ САЙТ И ПОЛУЧИ</span>
					<p className="bottom">
						БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ ПО ЕГО ПРОДВИЖЕНИЮ ЧЕРЕЗ SMM И
						МАРКЕТИНГ
					</p>
				</div>
				<button className="blue get-site">ЗАКАЗАТЬ</button>
			</div>
			<img className="right" src={comp2} />
		</div>
	);
};
