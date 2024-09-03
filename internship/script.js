let displayValue = '';
let firstNumber = '';
let operator = '';

function clearDisplay() {
	displayValue = '';
	document.getElementById('display').value = displayValue;
}

function deleteLast() {
	displayValue = displayValue.slice(0, -1);
	document.getElementById('display').value = displayValue;
}

function appendNumber(number) {
	displayValue += number;
	document.getElementById('display').value = displayValue;
}

function appendOperator(op) {
	operator = op;
	firstNumber = displayValue;
	displayValue = '';
}

function calculate() {
	let result = eval(firstNumber + operator + displayValue);
	displayValue = result.toString();
	document.getElementById('display').value = displayValue;
}

