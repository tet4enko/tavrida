import React from "react";

import "./Smm.scss";

import samolet from "./Самолетик.png";

export default () => {
	return (
		<div className="Smm section page-content">
			<div className="left">
				<div className="text-wrapper">
					<div className="title">Как продвинуть свой сайт?</div>
					<div className="desc">
						И другие актуальные вопросы, читайте в нашем блоге...
					</div>
					<div className="button-wrapper">
						<button className="yellow">ЧИТАТЬ</button>
					</div>
				</div>
			</div>
			<div className="pic-wrapper">
				<img className="pic" src={samolet} />
			</div>
		</div>
	);
};
