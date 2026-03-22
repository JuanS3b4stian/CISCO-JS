/* Exercise 1: Arrays in JavaScript have a sort method available which, as you might guess, 
allows you to sort its elements. This method takes as an argument a function that will compare 
two elements of the array. The function should return zero if we consider the arguments to be the same, 
a value less than zero if we consider the first one to be smaller than the second, 
and a value larger than zero otherwise. Take a look at the example: 

let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

Task 1A. Try to modify the above piece of code to make it as short as possible. Suggestions:

- use an anonymous function;
- use an arrow function;
 -consider skipping the if statement.
*/

let number = prompt("Enter a random number");

if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}

/* Task 1B. Then modify the function so that the elements are sorted in descending order, 
not in ascending order as in the example.
*/

let numbers = [50, 10, 40, 30, 20];
let sorted = numbers.sort((a, b) => b - a);
console.log(sorted); // [10, 20, 30, 40, 50]

/* Exercise 2: Write three functions with the names add, sub, and mult, which will take two numerical arguments. 
The functions are to check if the given arguments are integers (use Number.isInteger). 
If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively
. The functions are to be declared using a function statement.

Example of use and expected results: 

console.log(add(12, 10)); // -> 22
console.log(mult(12, 10.1)); // -> NaN

*/

function add(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a + b;
}

function sub(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a - b;
}

function mult(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return NaN;
    }
    return a * b;
}

/* Exercise 3: Rewrite the functions from the previous task using an arrow function expression, 
trying to write them in the shortest possible form.

Example of use and expected results: 

console.log(sub(12, 10)); // -> 2
console.log(mult(10, 10.1)); // -> NaN

*/

let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;