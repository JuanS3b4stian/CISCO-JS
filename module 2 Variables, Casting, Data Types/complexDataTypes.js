// -------------------- Object --------------------

let testObj = {};
console.log(typeof testObj); // -> object

testObj = {
nr: 600,
str: "text"
};

console.log(testObj.nr); // -> 600
console.log(testObj.str); // -> text

let user1 = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};
   
let user2 = {
    name: "Mateus",
    surname: "Pinto",
    age: 21,
    email: "MateusPinto@dayrep.com"
};

console.log(user1.name); // -> Calvin
console.log(user2.name); // -> Mateus
   
console.log(user1.age); // -> 66
user1.age = 67;
console.log(user1.age); // -> 67
   
console.log(user2.phone); // -> undefined

// Add attribute "phone" to user2 ann then, print it
user2.phone = "904-399-7557";
console.log(user2.phone); // -> 904-399-7557

// Delete an attribute from an object
delete user2.phone;
console.log(user2.phone); // -> undefined

// -------------------- Array --------------------

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]); // -> Sun
console.log(days[2]); // -> Tue
console.log(days[5]); // -> Fri
   
days[0] = "Sunday";
console.log(days[0]); // -> Sunday
   
let emptyArray = [];
console.log(emptyArray[0]); // -> undefined

let animals = [];
console.log(animals[0]); // -> undefined

/* We can also store arrays as elements of the array, 
and we can access the elements of this nested array using multiple square brackets.*/

let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
console.log(names[0][1]); // -> Emma
console.log(names[1][1]); // -> James
   
let femaleNames = names[0];
console.log(femaleNames[0]); // -> Olivia
console.log(femaleNames[2]); // -> Mia