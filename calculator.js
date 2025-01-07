// Adding number, operation, 2nd number variables for storage
let numberOne;
// Dictates whether numberOne displays
let numberOneDisplay = true;
let operator;
// Dictates whether numberTwo displays
let numberTwoDisplay = false;
let numberTwo; 
// Answer variable
let answerDisplay = false;
let answer;


// Adding addition function
// First iteration will parse an array, which enables greater scaleability than taking a number of nums
function summedNums(number1, number2) {
    return number1 + number2;
} 

// Adding subtraction function
function subbedNums(number1, number2) {
    return number1 - number2; 
}

// Adding division function
function diviNums(number1, number2) { 
    if (number1 === 0) {
        return 'You can\'t divide by zero!'; //Zero division handling
    } else {
        return number1 / number2;
    }
}

// Adding multiplication function
function multiNums(number1, number2) {
    return number1 * number2;
}

// Creation of operate function, takes 2 numbers, calls one of the functions based on operator entered
function operate(number1, operator, number2) {
    if (operator === '+') {
        summedNums(number1, number2);
    } else if (operator === '-') {
        subbedNums(number1, number2);
    } else if (operator === '/') {
        diviNums(number1, number2);
    } else if (operator === '*') {
        multiNums(number1, number2);
    }
}

// clear button 
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    numberOne = 0;
    numberTwo = 0;
});

// display 
const display = document.querySelector("#output");
// While num 1 display == true, display num 1 
if (numberOneDisplay === true && numberTwoDisplay === false) {
    display.textContent = numberOne;
// while num 2 display = true, display num 2 
} else if (numberTwoDisplay === true && numberOneDisplay === false) {
    display.textContent = numberTwo
} else if (answerDisplay === true ** numberOneDisplay === false && numberTwoDisplay === false) {
    display.textContent = answer;
}
// Once done, display answer

// Adding event listeners for calculator buttons
const one = document.querySelector("#one");
// add event of clicking button 


const two = document.querySelector("#two");
// add event of clicking button
const three = document.querySelector("#three");
// add event of clicking button
const four = document.querySelector("#four");
// add event of clicking button 
const five = document.querySelector("#five");
// add event of clicking button
const six = document.querySelector("#six");
// add event of clicking button 
const seven = document.querySelector("#seven");
// add event of clicking button
const eight = document.querySelector("#eight");
// add event of clicking button
const nine = document.querySelector("#nine");
// add event of clicking button
const zero = document.querySelector("#zero");
// Add event of clicking button

// Add operator buttons 