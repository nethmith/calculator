let display = document.getElementById('display');
let currentInput = '0';
let operator = '';
let previousInput = '';

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(num) {
    if (currentInput === '0') {
        currentInput = num.toString();
    } else {
        currentInput += num.toString();
    }
    updateDisplay();
}

function appendOperator(op) {
    operator = op;
    previousInput = currentInput;
    currentInput = '0';
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    previousInput = '';
    updateDisplay();
}

function plusMinus() {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
}

function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch(operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}

// Event Listeners
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => appendNumber(button.dataset.number));
});

document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => appendOperator(button.dataset.operator));
});

document.getElementById('decimal').addEventListener('click', appendDecimal);
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('plus-minus').addEventListener('click', plusMinus);
document.getElementById('percent').addEventListener('click', percent);
document.getElementById('equals').addEventListener('click', calculate);

updateDisplay();