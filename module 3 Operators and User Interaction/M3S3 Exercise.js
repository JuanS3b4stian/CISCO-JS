/* Exercise: Using everything you’ve learned up until this point, write a script that asks a user 
about the width, height, and length of a box, 
then calculate and return to the user the volume of this box. */

// Use the navegator's console to comprobate the exercise
let width = prompt("Volume of the box, enter width", 0);
let height = prompt("Volume of the box, enter height", 0);
let length = prompt("Volume of the box, enter length", 0);
let volume = width * height * length;
alert(`Calculated box volume is ${volume}`);