// Adding number, operation, 2nd number variables for storage
let numberOne = '';
// Dictates whether numberOne displays
let numberOneDisplay = true;
let operator;
// Dictates whether numberTwo displays
let numberTwoDisplay = false;
let numberTwo = ''; 
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
    numberOne = '';
    numberTwo = '';
    display.textContent = numberOne;
});

// display 
const display = document.querySelector("#output");
// While num 1 display == true, display num 1 
if (numberOneDisplay === true && numberTwoDisplay === false) {
    display.textContent = numberOne;
// While num 2 display == true, display num 2 
} else if (numberTwoDisplay === true && numberOneDisplay === false) {
    display.textContent = numberTwo;
// While answer display == true, display answer 
} else if (answerDisplay === true && numberOneDisplay === false && numberTwoDisplay === false) {
    display.textContent = answer;
}


// Adding event listeners for calculator buttons
const one = document.querySelector("#one");
// add event of clicking button 
one.addEventListener("click", () => {
    // If number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '1';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '1';
        display.textContent = numberTwo;
    }
});

const two = document.querySelector("#two");
// add event of clicking button
two.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '2';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '2';
        display.textContent = numberTwo;
    }
});

const three = document.querySelector("#three");
// add event of clicking button
three.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '3';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '3';
        display.textContent = numberTwo;
    }
});

const four = document.querySelector("#four");
// add event of clicking button 
four.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '4';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '4';
        display.textContent = numberTwo;
    }
});

const five = document.querySelector("#five");
// add event of clicking button
five.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '5';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '5';
        display.textContent = numberTwo;
    }
});

const six = document.querySelector("#six");
// add event of clicking button 
six.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '6';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '6';
        display.textContent = numberTwo;
    }
});

const seven = document.querySelector("#seven");
// add event of clicking button
seven.addEventListener("click", () => {
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '7';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '7';
        display.textContent = numberTwo;
    }
}); 

const eight = document.querySelector("#eight");
// add event of clicking button
eight.addEventListener("click", () => {
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '8';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '8';
        display.textContent = numberTwo;
    }
});

const nine = document.querySelector("#nine");
// add event of clicking button
nine.addEventListener("click", () => {
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '9';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '9';
        display.textContent = numberTwo;
    }
});

const zero = document.querySelector("#zero");
// Add event of clicking button
zero.addEventListener("click", () => {
    if (numberOneDisplay == true && numberTwoDisplay == false) {
        numberOne += '0';
        display.textContent = numberOne;
    } else if (numberTwoDisplay == true && numberOneDisplay == false) {
        numberTwo += '0';
        display.textContent = numberTwo;
    }
});

// Add operator buttons 
// Addition
const addition = document.querySelector("#plus");
addition.addEventListener("click", () => {

    // call addition function

});