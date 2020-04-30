import React, { Component } from "react";
import "./SuperFooter.scss";
import back from "./back.png";

import tel from "./Телефон.png";
import car from "./Машина.png";
import design from "./Дизайнер.png";

import vk from "./vk.png";
import inst from "./inst.png";
import gl from "./gl.png";

import mail from "./Почта.png";
import time from "./Часы.png";

class SuperFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const socialIconSize = "30px";
		const iconSize = "45px";

		const rabotniki = [
			{
				icon: tel,
				position: "Менеджер по заказам",
				tel1: (
					<React.Fragment>
						7 978 <b>079 09 79</b>
					</React.Fragment>
				),
				tel2: "+79780790979",
				side: "left"
			},
			{
				icon: car,
				position: "Логистика",
				tel1: (
					<React.Fragment>
						7 978 <b>823 51 37</b>
					</React.Fragment>
				),
				tel2: "+79788235137",
				side: "center"
			},
			{
				icon: design,
				position: "Дизайнер",
				tel1: (
					<React.Fragment>
						7 978 <b>590 51 56</b>
					</React.Fragment>
				),
				tel2: "+79785905156",
				side: "right"
			}
		];

		const rabotnik = (icon, position, tel1, tel2) => {
			return (
				<div className="rabotnik">
					<img src={icon} height={iconSize} />
					<div className="info">
						<div className="position">{position}</div>
						<a
							className="tel"
							itemProp="telephone"
							href={`tel:${tel2}`}
						>
							{tel1}
						</a>
					</div>
				</div>
			);
		};

		return (
			<div className="SuperFooter">
				<div className="main" width="1200px" height="560px">
					<div className="copyright">
						© 2015-2020 Рекламное агенство «ТАВРИДА МЕДИА» – реклама
						в Симферополе и другие городах Крыма
					</div>

					{rabotniki.map(item => {
						return (
							<div className={`col coltop ${item.side}`}>
								{rabotnik(
									item.icon,
									item.position,
									item.tel1,
									item.tel2
								)}
							</div>
						);
					})}

					<div className="col left colbottom mail">
						<img src={mail} height={iconSize}></img>
						<a target="_blank" href="mailto:tavrida.media@mail.ru">
							tavrida.media@mail.ru
						</a>
					</div>

					<div className="col center colbottom time">
						<img src={time} height={iconSize}></img>
						<span className="text">10:00 - 19:00 / Пн-Пт</span>
					</div>

					<div className="col right colbottom callback">
						<button className="btn">ПЕРЕЗВОНИТЬ ВАМ?</button>
					</div>

					<div className="social" id="social-links">
						<span className="text">Следите за нами в:</span>
						<div className="icons">
							<a
								className="icon"
								itemProp="sameAs"
								href="https://www.instagram.com/tavridamedia"
							>
								<img
									src={inst}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
							<a
								className="icon"
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img
									src={vk}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
							<a
								className="icon"
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img
									src={gl}
									width={socialIconSize}
									height={socialIconSize}
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SuperFooter;
