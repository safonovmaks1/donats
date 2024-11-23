import { Component } from '../core/Component';

export class List extends Component {
	setup() {
		this.$rootElement = document.createElement('div');
		this.$rootElement.className = 'donates-container';

		const $title = document.createElement('h2');
		$title.className = 'donates-container__title';
		$title.textContent = 'Список донатов';

		const $donatsList = document.createElement('div');
		$donatsList.className = 'donates-container__donates';
		this.$listContainer = $donatsList;

		this.$rootElement.appendChild($title);
		this.$rootElement.appendChild($donatsList);
	}

	addItem(item) {
		this.$listContainer.appendChild(item.$rootElement);
	}
}
