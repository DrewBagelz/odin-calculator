let operandA;
let operator;
let operandB;

function operate(operandA, operator, operandB) {
	if (operator === "+") {
		return addition(operandA, operandB);
	} else if (operator === "-") {
		return subtraction(operandA, operandB);
	} else if (operator === "*") {
		return multiplication(operandA, operandB);
	} else if (operator === "/") {
		return division(operandA, operandB);
	}
}

function addition(a, b) {
	return a + b;
}

function subtraction(a, b) {
	return a - b;
}

function multiplication(a, b) {
	return a * b;
}

function division(a, b) {
	if (b === 0) {
		return "You can't divide by 0 you silly goose!";
	} else {
		return a / b;
	}
}
