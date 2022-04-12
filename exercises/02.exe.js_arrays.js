// JS | Arrays

// Exercise
//1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:

const arr = [1,2,3,4,5,6,7];
arr.push(0);
console.log(arr)

arr.unshift(0);
console.log(arr)

// 2.What is _returned_ by `push`? Before throwing this into the console, form a hypothesis about what you think the return value will be:

const numbers = [5,7,9];
numbers.push(6); 
console.log(numbers)

//3 Change all numbers to be those numbers multiplied by two:

const multiply = (num1, num2) => {
    return num1 + num2;
};

let resultMultiply = multiply(4,5);

