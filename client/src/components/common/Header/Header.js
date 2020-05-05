import React, { Component } from "react";
import "./Header.scss";

import logo from "./Logo_Shapka.png";
import phone from "./Telofon_Shapka.png";

import logoWhite from "./Logo_Shapka_white.png";
import phoneWhite from "./Telofon_Shapka_white.png";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			servicesOpened: false,
			servicesHovered: false,
			servicesPopupHovered: false
		};
	}

	onServivesMouseOver() {
		console.log("item hover");
		this.setState({ servicesHovered: true, servicesOpened: true });
	}

	onServivesMouseOut() {
		console.log("item out");
		this.setState({
			servicesHovered: false,
			servicesOpened: this.state.servicesPopupHovered
		});
	}

	onServivesPopupMouseOver() {
		console.log("popup hover");
		this.setState({ servicesPopupHovered: true, servicesOpened: true });
	}

	onServivesPopupMouseOut() {
		console.log("popup");
		this.setState({
			servicesPopupHovered: false,
			servicesOpened: this.state.servicesHovered
		});
	}

	render() {
		return (
			<div
				className={`Header ${this.props.general ? "general" : ""}`}
				itemScope
				itemType="http://schema.org/LocalBusiness"
				itemRef="social-links"
			>
				<div className="header-content page-content">
					<a href="/" itemProp="url" className="left">
						<img
							itemProp="logo"
							className="logo"
							src={this.props.general ? logo : logoWhite}
							width="60px"
							height="60px"
						/>
						<div className="label">
							<div className="top">ТАВРИДА МЕДИА</div>
							<div className="bottom">РЕКЛАМНОЕ АГЕНСТВО</div>
						</div>
					</a>
					<div className="menu">
						<span
							className={`item ${
								this.state.servicesOpened ? "opened" : ""
							}`}
						>
							<span
								className="label"
								onMouseOver={() => this.onServivesMouseOver()}
								onMouseOut={() => this.onServivesMouseOut()}
							>
								Услуги
							</span>
							<div
								className="popup"
								onMouseOver={() =>
									this.onServivesPopupMouseOver()
								}
								onMouseOut={() =>
									this.onServivesPopupMouseOut()
								}
							>
								<a
									href="/uslugi/naruzhnaya-reklama"
									className="menu-item"
								>
									<span className="point orange"></span>
									Наружная реклама
								</a>
								<a
									href="/uslugi/polygraphy"
									className="menu-item"
								>
									<span className="point blue"></span>
									Полиграфия
								</a>
								<a
									href="/uslugi/suvenirka"
									className="menu-item"
								>
									<span className="point yellow"></span>
									Сувенирная продукция
								</a>
								<a
									href="/uslugi/cleaning"
									className="menu-item"
								>
									<span className="point orange"></span>
									Клининг рекламных конструкций
								</a>
								<a href="https:vk.com/" className="menu-item">
									<span className="point blue"></span>
									Smm и таргетинг
								</a>
								<a href="https:vk.com/" className="menu-item">
									<span className="point yellow"></span>
									Разработка сайтов
								</a>
								<a href="https:vk.com/" className="menu-item">
									<span className="point orange"></span>
									Дизайн
								</a>
							</div>
						</span>
						<span className="item">Цены</span>
						<span className="item">Проекты</span>
						<span className="item">О нас</span>
					</div>
					<div className="right">
						<img
							className="logo"
							src={this.props.general ? phone : phoneWhite}
							width="60px"
							height="60px"
						/>
						<div className="contacts">
							<a
								className="phone"
								itemProp="telephone"
								href="tel:+79780790979 "
							>
								7 978 079 09 79
							</a>
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
				</div>
			</div>
		);
	}
}

export default Header;
