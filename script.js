let operandX = "";
let operandY = "";
let operator = "";
let displayValue = Number(0);

const screen = document.querySelector(".screen");
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const numbers = document.querySelectorAll(".num-button");
const operators = document.querySelectorAll(".op-button");

updateDisplay();

numbers.forEach((number) =>
	number.addEventListener("click", (e) => {
		handleNumber(e.target.textContent);
	})
);

operators.forEach((operator) =>
	operator.addEventListener("click", (e) => {
		handleOperator(e.target.textContent);
	})
);

allClear.addEventListener("click", () => {
	operandX = "";
	operandY = "";
	operator = "";
	displayValue = 0;
	updateDisplay();
});

function updateDisplay() {
	if (displayValue.length < 9 || displayValue === 0) {
		screen.textContent = displayValue;
		displayValue = Number(displayValue);
	}
}

function handleNumber(num) {
	if (displayValue === 0 && num !== "0") {
		displayValue = "";
		displayValue += num;
		updateDisplay();
	} else if (displayValue === 0 && num === "0") {
		displayValue = 0;
	} else {
		displayValue += num;
		updateDisplay();
	}
}

function handleOperator(op) {
	operator = op;
	operandX = Number(displayValue);
	displayValue = "";
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
