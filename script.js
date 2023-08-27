const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");

let currentInput = "";
let operator = "";
let result = "";

buttons.forEach(button => {
    button.addEventListener("click", handleClick);
});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clearDisplay);

function handleClick(event) {
    const value = event.target.textContent;

    if (value === "+" || value === "-" || value === "*" || value === "/") {
        operator = value;
        currentInput = result;
        result = "";
        display.value = currentInput + " " + operator;
    } else {
        currentInput += value;
        display.value = currentInput;
    }
}

function calculate() {
    if (operator && currentInput !== "") {
        const num1 = parseFloat(result);
        const num2 = parseFloat(currentInput);

        switch (operator) {
            case "+":
                result = (num1 + num2).toString();
                break;
            case "-":
                result = (num1 - num2).toString();
                break;
            case "*":
                result = (num1 * num2).toString();
                break;
            case "/":
                result = (num1 / num2).toString();
                break;
        }

        display.value = result;
        currentInput = "";
        operator = "";
    }
}

function clearDisplay() {
    display.value = "";
    currentInput = "";
    operator = "";
    result = "";
}
