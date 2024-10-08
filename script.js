let operandX = "";
let operandY = "";
let operator = "";
let result = "";
let displayValue = "0";

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

equals.addEventListener("click", () => {
	if (operandX) {
		operandY = displayValue;
		result = operate(Number(operandX), Number(operandY), operator);
		if (result === "ABSURD!!") {
			displayValue = result;
			updateDisplay();
			displayValue = "0";
			operandX = "";
			operandY = "";
			operator = "";
		} else {
			displayValue = result.toString();
			updateDisplay();
			operandX = displayValue;
			operandY = "";
			operator = "";
		}
	}
});

decimal.addEventListener("click", () => {
	if (displayValue === operandX || displayValue === "0") {
		displayValue = "0";
		displayValue += ".";
	} else if (!displayValue.includes(".")) {
		displayValue += ".";
	}
	updateDisplay();
});

allClear.addEventListener("click", () => {
	operandX = "";
	operandY = "";
	operator = "";
	displayValue = "0";
	updateDisplay();
});

clear.addEventListener("click", () => {
	if (displayValue.length > 1) {
		displayValue = displayValue.slice(0, -1);
		updateDisplay();
	} else if (displayValue.length === 1) {
		displayValue = "0";
		updateDisplay();
	}
});

function updateDisplay() {
	if (displayValue.length < 9 || displayValue === "0") {
		screen.textContent = displayValue;
	} else if (displayValue.length >= 9) {
		screen.textContent = Number(displayValue).toExponential(2);
	}
}

function handleNumber(num) {
	if (operator === "") {
		if (displayValue === "0") {
			displayValue = num;
		} else if (displayValue === operandX) {
			displayValue = num;
		} else {
			displayValue += num;
		}
	} else {
		if (displayValue === operandX || displayValue === "0") {
			displayValue = num;
		} else {
			displayValue += num;
		}
	}
	updateDisplay();
}

function handleOperator(op) {
	if (operandX && operator) {
		operandY = displayValue;
		result = operate(Number(operandX), Number(operandY), operator);
		displayValue = result.toString();
		operandX = displayValue;
		operator = op;
		updateDisplay();
	} else {
		operator = op;
		operandX = displayValue;
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
			return "ABSURD!!";
		} else {
			return x / y;
		}
	}
}
