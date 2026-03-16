/* The price of a single rose (8) and the number of roses you have (70).
The price of a single lily (10) and the number of lilies you have (50).
The price of a single tulip (2) and the number of tulips you have (120). */

let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let stockRoses = 70;
let stockLilies = 50;
let stockTulips = 120;

/* Now declare three variables, one each for the roses, lilies, and tulips you have, 
in which you place their total price. Insert the corresponding values into the variables 
using the variables declared in the previous step. Finally, declare a variable in which 
you store the price of all your flowers (again, use the previous variables for initialization). 
Display all inventory information in the console in the following form: */

let totalRosesPrice = rosePrice * stockRoses;
let totalLiliesPrice = lilyPrice * stockLilies;
let totalTulipsPrice = tulipPrice * stockTulips;

let totalPriceAllFlowers = totalRosesPrice + totalLiliesPrice + totalTulipsPrice;

console.log("Rose - Unit Price: " + rosePrice + " , Quantity: " + stockRoses + " , Value: " + totalRosesPrice);
console.log("Lily - Unit Price: " + lilyPrice + " , Quantity: " + stockLilies + " , Value: " + totalLiliesPrice);
console.log("Tulip - Unit Price: " + tulipPrice + " , Quantity: " + stockTulips + " , Value: " + totalTulipsPrice);
console.log("Total: " + totalPriceAllFlowers);

/*Rose – unit price: 8 , quantity: 70 , value: 560
Lily – unit price: 10 , quantity: 50 , value: 500
Tulip – unit price: 2 , quantity: 120 , value: 240
Total: 1300*/
