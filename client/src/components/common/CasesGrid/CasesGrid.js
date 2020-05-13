import React from "react";

import "./CasesGrid.scss";

import picTM from "./pics/ТМ.png";

export default props => {
	return (
		<div className="CasesGrid">
			{props.cases.map(item => {
				return (
					<div className="case-item">
						<div className="head">
							<span className="label">
								{item.label && item.label.toUpperCase()}
							</span>
							<img src={picTM} className="tm" />
						</div>
						<button className="yellow price">УЗНАТЬ ЦЕНУ</button>
					</div>
				);
			})}
		</div>
	);
};
