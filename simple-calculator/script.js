// global variables 
let operand1 = 0;
let operand2 = 0;

function calculate(operation) {
    operand1 = parseFloat(document.getElementById("operand1").value) || 0;
    operand2 = parseFloat(document.getElementById("operand2").value) || 0;

    let result;

    switch (operation) {
        case 'add':
            result = operand1 + operand2;
            break;
        case 'subtract':
            result = operand1 - operand2;
            break;
        case 'multiply':
            result = operand1 * operand2;
            break;
        case 'divide':
            result = operand1 / operand2;
            break;
        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerText = "Result: " + result;
}
