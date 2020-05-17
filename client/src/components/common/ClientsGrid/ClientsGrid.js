import React, { Component } from "react";

import "./ClientsGrid.scss";

const clientsCount = 10;
const clients = [];

for (let i = 1; i <= clientsCount; i++) {
	clients.push(require(`./pics/${i}.jpg`));
}

class ClientsGrid extends Component {
	constructor(props) {
		super(props);

		this.state = {
			positions: [...Array(clientsCount).keys()],
			visible: true
		};
	}

	componentDidMount() {
		const self = this;
		setInterval(() => {
			self.setState({
				visible: false
			});

			setTimeout(() => {
				self.setState({
					visible: true,
					positions: self.state.positions.sort(
						() => Math.random() - 0.5
					)
				});
			}, 300);
		}, 5000);
	}

	render() {
		return (
			<div className="ClientsGrid section page-content">
				<div className="general-header">НАШИ ПРОЕКТЫ</div>
				<div className={`grid ${this.state.visible ? "visible" : ""}`}>
					{this.state.positions.slice(0, 9).map(client => (
						<img className="client" src={clients[client]} />
					))}
				</div>
			</div>
		);
	}
}

export default ClientsGrid;
