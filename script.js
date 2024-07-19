let firstNumber = '';
let secondNumber = '';
let operator = '';
let displayValue = '';

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "CAN NOT DIVIDE BY ZERO";
    } return firstNumber / secondNumber;
}

function operate(operator, firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
    }
}

function activateDigits() {
    let digits = document.querySelectorAll(".digit");
    let displayArea = document.querySelector(".display-area");
    digits.forEach((digit) => {
        digit.addEventListener("click", () => {
            if (displayValue.length < 20) {
                displayValue += digit.textContent;
                displayArea.textContent = displayValue;
            }
        })
    })
}

activateDigits();
