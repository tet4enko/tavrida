import React from "react";

import "./index.scss";

export default props => {
	return (
		<button className={`toggle tg-${props.side}`} onClick={props.onClick} />
	);
};
