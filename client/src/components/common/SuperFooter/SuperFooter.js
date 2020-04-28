import React, { Component } from "react";
import "./SuperFooter.scss";
import back from "./back.png";

import logo from "./logo.png";
import phone from "./phone.png";
import mail from "./mail.png";

import vk from "./vk.png";
import inst from "./inst.png";
import gl from "./gl.png";

class SuperFooter extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="SuperFooter">
				<div className="main" width="1200px" height="560px">
					<div className="copyright">
						© 2015-2020 Рекламное агенство «ТАВРИДА МЕДИА» – реклама
						в Симферополе и другие городах Крыма
					</div>
					<a href="/" className="logo">
						<img
							className="pic"
							src={logo}
							width="135px"
							height="135px"
						/>
					</a>
					<div className="left-col col">
						<a className="col-link" href="vk.com">
							УСЛУГИ
						</a>
						<a className="col-link" href="vk.com">
							ЦЕНЫ
						</a>
					</div>
					<div className="right-col col">
						<a className="col-link" href="vk.com">
							ПОРТФОЛИО
						</a>
						<a className="col-link" href="vk.com">
							БЛОГ
						</a>
					</div>
					<div className="contacts col">
						<div className="top">
							<div className="pics">
								<img
									src={phone}
									width="55px"
									height="55px"
									className="pic"
								/>
								<img
									src={mail}
									width="35px"
									height="35px"
									className="pic"
								/>
							</div>
							<div className="links">
								<div className="tel-wrapper first">
									<div className="label">
										Менеджер по заказам
									</div>
									<a
										className="tel"
										itemProp="telephone"
										href="tel:+79780790979 "
									>
										7 978 <b>079 09 79</b>
									</a>
								</div>
								<div className="tel-wrapper second">
									<div className="label">Логистика</div>
									<a
										className="tel"
										itemProp="telephone"
										href="tel:+79780790979 "
									>
										7 978 <b>823 51 37</b>
									</a>
								</div>
								<div className="tel-wrapper thirth">
									<div className="label">Дизайнер</div>
									<a
										className="tel"
										itemProp="telephone"
										href="tel:+79780790979 "
									>
										7 978 <b>590 51 56</b>
									</a>
								</div>
								<a
									className="email"
									itemProp="email"
									target="_blank"
									href="mailto:tavrida.media@mail.ru"
								>
									tavrida.media@mail.ru
								</a>
							</div>
						</div>
						<div className="bottom" id="social-links">
							<a
								itemProp="sameAs"
								href="https://www.instagram.com/tavridamedia"
							>
								<img src={inst} width="25px" height="25px" />
							</a>
							<a
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img src={vk} width="25px" height="25px" />
							</a>
							<a
								itemProp="sameAs"
								href="https://vk.com/tavrida.media"
							>
								<img src={gl} width="25px" height="25px" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SuperFooter;
