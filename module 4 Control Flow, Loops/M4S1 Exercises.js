/* Exercise 1: Write a script that will ask the user to input a number.

Display the message "Bingo!" when the number is greater than 90 but less than 110, 
otherwise display the message: "Miss". Use the if statement. */

let number = prompt("Write a number: ");

if (number > 90 && number < 110) {
    console.log("Bingo!");
} else {
    console.log("Miss");
}

// Exercise 2: Rewrite the code from the previous task, replacing if with a ternary conditional operator.

let message = number > 90 && number < 110 ? console.log("Bingo!") : console.log("Miss");
console.log(message);

/* Exercise 3: Write a simple calculator application. Ask the user for the following input, one by one: 
two numbers and a character representing a mathematical operation, 
one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. 
If the user input is invalid, display a message that informs the user that an error has occurred.

Remember that the value returned by the prompt function is of the type string. 
You can use the Number.isNaN method to check if you get the correct number after conversion. 
For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true. */

let num1 = Number(prompt("Write the first number: "));
let num2 = Number(prompt("Write the second number: "));
let operator = prompt("Write the operation symbol you want: ");

if (!Number.isNaN(num1) && !Number.isNaN(num2)) {

    switch (operator) {
    case "+":
        console.log("Addition: " + (num1 + num2));
        break;
    case "-":
        console.log("Subtraction: " + (num1 - num2));
        break;
    case "*":
        console.log("Multiplication: " + (num1 * num2));
        break;s
    case "/":
        if (num2 == 0) {
            alert("Careful, divison by zero it's not allowed!");
            break;
        } else {
           console.log("Division: " + (num1 / num2));
           break;
        }
    default:
        console.log("Your input is invalid");
        break;

    }
} else {
    alert("Your numbers input are not correct, try it again!");
}