function areBothNumbers(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return false;
    }
    return true;
}

function add(num1, num2) {
    if(!areBothNumbers(num1, num2)) {
        return undefined;
    }
    return num1 + num2;
}

function subtract(num1, num2) {
    if(!areBothNumbers(num1, num2)) {
        return undefined;
    }
    return num1 - num2;
}

// Not doing divide by 0 check since that can be tested by Testing code itself.
function divide(num1, num2) {
    if(!areBothNumbers(num1, num2)) {
        return undefined;
    }
    return num1 / num2;
}

function multiply(num1, num2) {
    if(!areBothNumbers(num1, num2)) {
        return undefined;
    }
    return num1 * num2;
}

module.exports = {
    add,
    subtract,
    divide,
    multiply
}