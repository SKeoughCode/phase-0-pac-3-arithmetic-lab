function add(number) {
    return number++;
}

function increment(number) {
    number += 1;
    return number;
}

function decrement(number) {
    number -= 1;
    return number;
}

function add(num1, num2) {
    var temp = num1 + num2;
    return temp;
}

function subtract(number) {
    return number--;
}

function subtract(num1, num2) {
    var temp = num1 - num2;
    return temp;
}

function multiply(num1, num2) {
    var temp;
    temp = num1;
    temp *= num2;
    return temp;
}

function divide(num1, num2) {
    var temp;
    temp = num1;
    temp /= num2;
    return temp;
}

function makeInt(number) {
    var temp;
    temp = parseInt(number, 10);
    return temp;
}

function preserveDecimal(number) {
    var temp;
    temp = parseFloat(number);
    return temp;
}