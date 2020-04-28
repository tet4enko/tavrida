import React from "react";

import "./ServiceCaption.scss";

export default props => {
	return (
		<div className="ServiceCaption">
			<h1 className="caption">{props.caption.toUpperCase()}</h1>
			<div className="description">{props.description}</div>
		</div>
	);
};
