import React from "react";

import "./ServiceList.scss";

export default props => {
	return (
		<div className="ServiceList section">
			<h2 className="caption">НЕМНОГО О ГЛАВНОМ</h2>
			<ol style={{ padding: 0, margin: 0 }}>
				{props.services.map(service => {
					return (
						<li className="service">
							<div className="left">
								<div className="wrapper">
									<div className="name">{service.name}</div>
									<div className="text">
										{service.longText}
									</div>
								</div>
							</div>
							<div className="right">
								<div className="pic-wrapper">
									<img className="pic" src={service.pic} />
								</div>
								<div className="buttons">
									<button className="get_price btn">
										УЗНАТЬ ЦЕНУ
									</button>
									<button className="order btn">
										ЗАКАЗАТЬ
									</button>
								</div>
							</div>
						</li>
					);
				})}
			</ol>
		</div>
	);
};
