import React, { Component } from "react";
import "./ProductsSlider.scss";

import Toggle from "./../Toggle";

import { services as outdoorServices } from "./../../pages/outdoor";
import { services as polygraphyServices } from "./../../pages/polygraphy";
import { services as suvenirkaServices } from "./../../pages/suvenirka";

const services = [];

for (let i = 0; i < 6; i++) {
	services.push(outdoorServices[i]);
	services.push(polygraphyServices[i]);
	services.push(suvenirkaServices[i]);
}

class ProductsSlider extends Component {
	constructor(props) {
		super(props);

		this.state = {
			index: 0
		};
	}

	componentDidMount() {
		this.srartInterval();
	}

	srartInterval(side) {
		if (this.interval) {
			clearInterval(this.interval);
		}

		if (side === "left") {
			this.interval = setInterval(this.goLeft.bind(this), 2000);
		} else {
			this.interval = setInterval(this.goRight.bind(this), 2000);
		}
	}

	getLeft(index, diff) {
		let result = index - diff;

		if (result < 0) {
			result = services.length + result;
		}

		return result;
	}

	getRight(index, diff) {
		let result = index + diff;

		if (result >= services.length) {
			result = result - services.length;
		}

		return result;
	}

	goLeft() {
		this.setState({
			index: this.getLeft(this.state.index, 1)
		});

		this.srartInterval("left");
	}

	goRight() {
		this.setState({
			index: this.getRight(this.state.index, 1)
		});

		this.srartInterval("right");
	}

	render() {
		const state = this.state.index;
		const self = this;

		return (
			<div className="ProductsSlider section">
				<div className="general-header">{this.props.label || ""}</div>
				<div className="services">
					{services.map((service, index) => {
						let cls = "";
						if (state === self.getLeft(index, 2)) {
							cls = "postright visible";
						}
						if (state === self.getLeft(index, 1)) {
							cls = "right visible";
						}
						if (state === index) {
							cls = "center visible";
						}
						if (state === self.getRight(index, 1)) {
							cls = "left visible";
						}
						if (state === self.getRight(index, 2)) {
							cls = "preleft visible";
						}

						return (
							<div className={`service ${cls}`}>
								<img src={service.pic}></img>
								<span
									className="name"
									style={{
										color:
											this.props.textColor ||
											"var(--main-header-color)"
									}}
								>
									{service.name.toUpperCase()}
								</span>
							</div>
						);
					})}
				</div>
				<div className="toggles">
					<Toggle side="left" onClick={() => this.goLeft()} />
					<Toggle side="right" onClick={() => this.goRight()} />
				</div>
			</div>
		);
	}
}

export default ProductsSlider;
