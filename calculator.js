// Adding number, operation, 2nd number variables for storage
let numberOne = '';
// Dictates whether numberOne displays
let numberOneDisplay = true;
let operator = '';
// Dictates whether numberTwo displays
let numberTwoDisplay = false;
let numberTwo = ''; 
// Answer variable
let answerDisplay = false;
let answer = 0;

// Addition function
function summedNums(number1, number2) {
    answer = parseFloat((parseFloat(number1) + parseFloat(number2)).toFixed(3));
}  // Above rounds the answer to 3 decimals

// Adding subtraction function
function subbedNums(number1, number2) {
    answer = parseFloat((parseFloat(number1) - parseFloat(number2)).toFixed(3)); 
} // Above rounds the answer to 3 decimals

// Adding division function
function diviNums(number1, number2) { 
    if (number1 === '0' || number2 === '0') {
        alert('You can\'t divide by zero!'); //Zero division handling
    } else {
        answer = parseFloat((parseFloat(number1) / parseFloat(number2)).toFixed(3));
    } // Above rounds the answer to 3 decimals
} 

// Adding multiplication function
function multiNums(number1, number2) {
    answer = parseFloat((parseFloat(number1) * parseFloat(number2)).toFixed(3));
} // Above rounds answer to 3 decimals

// Dictates which function will run based on value of operator variable
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

// clear button behaviour
const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
    numberOne = '';
    numberTwo = '';
    answer = '';
    operator = '';
    display.textContent = numberOne;
    // reverts display back to showing num 1 upon press
    numberTwoDisplay = false;
    numberOneDisplay = true;
});

// display behaviour (displays numbers entered on calculator)
const display = document.querySelector("#output");
// While num 1 display == true, display number 1 
if (numberOneDisplay) {
    display.textContent = numberOne;
// While num 2 display == true, display number 2 
} else if (numberTwoDisplay) {
    display.textContent = numberTwo;
// While answer display == true, display answer 
} else if (answerDisplay) {
    display.textContent = answer;
}

// Following section covers the buttons on the UI
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
    if (numberOneDisplay) {
        numberOne += '2';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '2';
        display.textContent = numberTwo;
    }
});

const three = document.querySelector("#three");
// add event of clicking button
three.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay) {
        numberOne += '3';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '3';
        display.textContent = numberTwo;
    }
});

const four = document.querySelector("#four");
// add event of clicking button 
four.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay) {
        numberOne += '4';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '4';
        display.textContent = numberTwo;
    }
});

const five = document.querySelector("#five");
// add event of clicking button
five.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay) {
        numberOne += '5';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '5';
        display.textContent = numberTwo;
    }
});

const six = document.querySelector("#six");
// add event of clicking button 
six.addEventListener("click", () => {
    // if number 1 true
    if (numberOneDisplay) {
        numberOne += '6';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '6';
        display.textContent = numberTwo;
    }
});

const seven = document.querySelector("#seven");
// add event of clicking button
seven.addEventListener("click", () => {
    if (numberOneDisplay) {
        numberOne += '7';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '7';
        display.textContent = numberTwo;
    }
}); 

const eight = document.querySelector("#eight");
// add event of clicking button
eight.addEventListener("click", () => {
    if (numberOneDisplay) {
        numberOne += '8';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '8';
        display.textContent = numberTwo;
    }
});

const nine = document.querySelector("#nine");
// add event of clicking button
nine.addEventListener("click", () => {
    if (numberOneDisplay) {
        numberOne += '9';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '9';
        display.textContent = numberTwo;
    }
});

const zero = document.querySelector("#zero");
// Add event of clicking button
zero.addEventListener("click", () => {
    if (numberOneDisplay) {
        numberOne += '0';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        numberTwo += '0';
        display.textContent = numberTwo;
    }
});

// handles decimal/.
const decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if (numberOneDisplay) {
        // Error handling decimal before num here
        numberOne += '.';
        display.textContent = numberOne;
    } else if (numberTwoDisplay) {
        // error handling decimal before num here
        numberTwo += '.';
        display.textContent = numberTwo;
    }
});

// handles equals operator
const equals = document.querySelector("#equals");
equals.addEventListener("click", () => {
    if (numberOne !== '' && numberTwo !== '' && operator) {
        operate(numberOne, operator, numberTwo);
        display.textContent = answer;
        numberOne = answer.toString(); // Update numberOne with the result/answer, parses to string
        numberTwo = '';               // Reset numberTwo variable
        operator = '';                // Resets operator, ready to be reused in other calls
        numberOneDisplay = true;      // Ready for new input, if followed up
        numberTwoDisplay = false;
    }
});


const plus = document.querySelector("#plus");
// Add event of pressing plus button
plus.addEventListener("click", () => {
    numberOneDisplay = false;
    numberTwoDisplay= true;
    // tweaks operator variable, triggers next point
    operator = "+";
});

// handles subtraction
const subtraction = document.querySelector("#subtract");
subtraction.addEventListener("click", () => {
    numberOneDisplay = false;
    numberTwoDisplay = true;
    // tweaks operator variable, triggers next step
    operator = "-";
});

// Handles division
const division = document.querySelector("#divide");
division.addEventListener("click", () => {
    numberOneDisplay = false;
    numberTwoDisplay = true;
    // tweaks operator value, triggers next step
    operator = "/";
});

// handles times 
const times = document.querySelector("#times");
times.addEventListener("click", () => {
    numberOneDisplay = false;
    numberTwoDisplay = true;
    // tweaks operator value, triggers next step
    operator = "*";
});