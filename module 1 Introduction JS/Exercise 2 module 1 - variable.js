// Assume that the prices of flowers will be constant (they will not change).
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let stockRoses = 70;
let stockLilies = 50;
let stockTulips = 120;

let totalRosesPrice = rosePrice * stockRoses;
let totalLiliesPrice = lilyPrice * stockLilies;
let totalTulipsPrice = tulipPrice * stockTulips;

let totalPriceAllFlowers = totalRosesPrice + totalLiliesPrice + totalTulipsPrice;

console.log("Rose - Unit Price: " + rosePrice + " , Quantity: " + stockRoses + " , Value: " + totalRosesPrice);
console.log("Lily - Unit Price: " + lilyPrice + " , Quantity: " + stockLilies + " , Value: " + totalLiliesPrice);
console.log("Tulip - Unit Price: " + tulipPrice + " , Quantity: " + stockTulips + " , Value: " + totalTulipsPrice);
console.log("Total: " + totalPriceAllFlowers);

/*
Declare and initialize the remaining variables in the same way as in the previous example. 
Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30.
Display all the collected information in the console again. */

stockRoses = stockRoses - 20;
stockLilies = stockLilies - 30;

totalRosesPrice = rosePrice * stockRoses;
totalLiliesPrice = lilyPrice * stockLilies;
totalTulipsPrice = tulipPrice * stockTulips;

totalPriceAllFlowers = totalRosesPrice + totalLiliesPrice + totalTulipsPrice;

console.log("Rose - Unit Price: " + rosePrice + " , Quantity: " + stockRoses + " , Value: " + totalRosesPrice);
console.log("Lily - Unit Price: " + lilyPrice + " , Quantity: " + stockLilies + " , Value: " + totalLiliesPrice);
console.log("Tulip - Unit Price: " + tulipPrice + " , Quantity: " + stockTulips + " , Value: " + totalTulipsPrice);
console.log("Total: " + totalPriceAllFlowers);

