import React from "react";

import "./ServicesSlider.scss";

import Toggle from "./../Toggle";

let interval;

export default props => {
	const services = props.services;
	const [index, setIndex] = React.useState(2);
	const [isVisile, setVisibility] = React.useState(true);

	const getNextIndex = (index_, side = "right") => {
		let result;

		if (side === "right") {
			result = index_ + 1;
			if (result >= services.length) {
				result = 0;
			}
		} else {
			result = index_ - 1;
			if (result === -1) {
				result = services.length - 1;
			}
		}

		return result;
	};

	const toggle = (side = "right") => {
		setVisibility(false);

		setTimeout(() => {
			setIndex(getNextIndex(index, side));
			setVisibility(true);
		}, 200);
	};

	React.useEffect(() => {
		clearInterval(interval);
		interval = setInterval(toggle, 7000);
	}, [index, toggle]);

	const animateCls = `animate ${isVisile ? "" : "invisible"}`;
	return (
		<div className="ServicesSlider">
			<div className="left">
				<div className={`left-content ${animateCls}`}>
					<div className="name">{services[index].name}</div>
					<div className="text">{services[index].shortText}</div>
					<div className="buttons">
						<button className="get_price btn">УЗНАТЬ ЦЕНУ</button>
						<button className="order btn">ЗАКАЗАТЬ</button>
					</div>
				</div>
			</div>
			<div className="right">
				<div className={`img-wrapper ${animateCls}`}>
					<img src={services[index].pic} />
				</div>
				<div className="toggle_slide">
					<Toggle side="left" onClick={() => toggle("left")} />
					<Toggle side="right" onClick={() => toggle()} />
				</div>
			</div>
		</div>
	);
};
