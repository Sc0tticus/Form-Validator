// Brings in everything from the DOM

const form: HTMLFormElement = document.getElementById('form') as HTMLFormElement;
const username: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
const email: HTMLInputElement = document.getElementById('email') as HTMLInputElement;
const password: HTMLInputElement = document.getElementById('password') as HTMLInputElement;
const password2: HTMLInputElement = document.getElementById('password2') as HTMLInputElement;

// Show input error message
function showError(input: HTMLInputElement, message: string): void {
	const formControl = input.parentElement;

	if (formControl !== null) {
		formControl.className = 'form-control error';

		const small = formControl.querySelector('small');

		if (small !== null) {
			small.textContent = message;
		}
	}
}

// Show success outline
function showSuccess(input: HTMLInputElement): void {
	const formControl = input.parentElement;
	if (formControl !== null) {
		formControl.className = 'form-control success';
	}
}

// Check email is valid
function checkEmail(input: HTMLInputElement): void {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid');
	}
}

// Check required fields
function checkRequired(inputArr: HTMLInputElement[]): void {
	{
		inputArr.forEach(input => {
			if (input.value.trim() === '') {
				showError(input, `${getFieldName(input)} is required`);
			} else {
				showSuccess(input);
			}
		});
	}

	// Check input length
	function checkLength(input: HTMLInputElement, min: number = 6, max: number = 15): void {
		if (input.value.length < min) {
			showError(input, `${getFieldName(input)} must be at least ${min} characters`);
		} else if (input.value.length > max) {
			showError(input, `${getFieldName(input)} must be less than ${max} charactes`);
		} else {
			showSuccess(input);
		}
	}

	// Check passwords match
	function checkPasswordsMatch(input1: HTMLInputElement, input2: HTMLInputElement): void {
		if (input1.value !== input2.value) {
			showError(input2, 'Passwords do not match');
		}
	}

	// Get fieldname
	function getFieldName(input: HTMLInputElement): string {
		return input.id.charAt(0).toUpperCase() + input.id.slice(1);
	}

	// Event listeners
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		checkRequired([username, email, password, password2]);

		checkLength(username, 3, 15);
		checkLength(password, 6, 25);
		checkLength(password2, 6, 25);

		checkEmail(email);

		checkPasswordsMatch(password, password2);
	});
}
