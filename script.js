let operandX = "";
let operandY = "";
let operator = "";
let displayValue = 0;

const screen = document.querySelector(".screen");
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const numbers = document.querySelectorAll(".num-button");
const operators = document.querySelectorAll(".op-button");

updateDisplay();

function updateDisplay() {
	if (displayValue.length < 9 || displayValue === 0) {
		screen.textContent = displayValue;
	}
}

numbers.forEach((number) =>
	number.addEventListener("click", function (e) {
		handleNumber(e.target.textContent);
	})
);

allClear.addEventListener("click", () => {
	operandX = "";
	operandY = "";
	operator = "";
	displayValue = 0;
	updateDisplay();
});

function handleNumber(num) {
	if (displayValue === 0) {
		displayValue = "";
		displayValue += num;
		updateDisplay();
	} else {
		displayValue += num;
		updateDisplay();
	}
}

function operate(x, y, operator) {
	if (operator === "+") {
		return x + y;
	} else if (operator === "-") {
		return x - y;
	} else if (operator === "*") {
		return x * y;
	} else if (operator === "/") {
		if (y === 0) {
			return "You can't divide by 0 you silly goose!";
		} else {
			return x / y;
		}
	}
}
