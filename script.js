let operandX = "";
let operandY = "";
let operator = "";

const screen = document.querySelector(".screen");
const allClear = document.querySelector("#all-clear");
const clear = document.querySelector("#clear");
const decimal = document.querySelector("#decimal");
const equals = document.querySelector("#equals");
const numbers = document.querySelectorAll(".num-button");
const operators = document.querySelectorAll(".op-button");

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
