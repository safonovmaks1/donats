import { Component } from '../core/Component';

export class ListItem extends Component {
	setup(props) {
		this.state = {
			// id: Date.now(),
			id: new Date().toLocaleDateString('en-US'), // Если нужно как в примере
			date: new Date().toLocaleTimeString(),
			amount: props.amount,
		};

		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donate-item';

		const $item = document.createElement('div');

		$item.innerHTML = `${this.state.id}, ${this.state.date} - <b>$${this.state.amount}</b>`;

		this.$rootElement.appendChild($item);
	}
}
