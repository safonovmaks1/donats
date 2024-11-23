import { Component } from '../core/Component';

export class Form extends Component {
	setup(props) {
		this.state = {
			amount: '',
		};

		this.$rootElement = document.createElement('form');
		this.$rootElement.className = 'donate-form';

		const $label = document.createElement('label');
		$label.className = 'donate-form__input-label';
		$label.textContent = 'Введите сумму в $';

		const $input = document.createElement('input');
		$input.className = 'donate-form__donate-input';
		$input.name = 'amount';
		$input.type = 'number';
		$input.max = '100';
		$input.min = '1';
		$input.required = 'required';
		this.$input = $input;

		const $btn = document.createElement('button');
		$btn.className = 'donate-form__submit-button';
		$btn.type = 'submit';
		$btn.textContent = 'Задонатить';
		$btn.disabled = true;
		this.$button = $btn;

		$label.append($input);

		this.$rootElement.appendChild($label);
		this.$rootElement.appendChild($btn);

		$input.addEventListener('input', this.handleInput.bind(this));
		this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
	}

	get isValid() {
		if (this.state.amount >= 1 && this.state.amount <= 100) {
			return true;
		} else {
			return false;
		}
	}

	handleInput(event) {
		this.state.amount = event.target.value;

		if (this.isValid) {
			this.$button.disabled = false;
		} else {
			this.$button.disabled = true;
		}
	}

	handleSubmit(event) {
		event.preventDefault();

		this.props.onSubmit(Number(this.state.amount));

		this.state.amount = '';
		this.$input.value = '';
	}
}
