// Adding addition function
// First iteration will parse an array, which enables greater scaleability than taking a number of nums
function summedNums(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
} // Refactor above using a method later 


// Adding subtraction function
function subbedNums(...numbers) {
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total -= numbers[i];
    }
    return total;
} // Refactor using an array method later


// Adding division function
function diviNums(...numbers) { 
    let total = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        total /= numbers[i];
    }
    return total;
} // Refactor later using an array method


// Adding multiplication function