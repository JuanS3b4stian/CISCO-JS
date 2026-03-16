// ---------- Data Types ----------
 
// Boolean
let isTrue = true
console.log(typeof isTrue) // Boolean

// Number 

let number = 9
console.log(typeof number) // Number

// BigInt

let bigNumber = 1n
console.log(typeof bigNumber) // bigInt"

// String
let string = "I'm a String dude"
console.log(typeof string) // String"

// Symbol
let id = Symbol("Unique ID");
console.log(typeof id); // Symbol

// Undefined
let declaredVar;
console.log(typeof declaredVar); // undefined

console.log("----------------------------------------")

console.log("----------------------------------------")

// ---------- String Methods ----------

let str = "java script language";
   
console.log(str.length); // -> 20
console.log('test'.length); // -> 4
   
console.log(str.charAt(0)); // -> 'j'
console.log('abc'.charAt(1)); // -> 'b'
   
console.log(str.slice(0, 4)); // -> 'java'
console.log('test'.slice(1, 3)); // -> 'es'
   
console.log(str.split(' ')); // -> ['java', 'script', 'language']
console.log('192.168.1.1'.split('.')); // -> ['192', '168', '1', '1']