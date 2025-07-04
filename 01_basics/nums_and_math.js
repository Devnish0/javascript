// const AutoNum = 200; // automatically converted into number dt
// const ForceNum = Number(200); // forcefully converted into number
// const ObjectNum = new Number(200); // object number

// let balance = 12231.5673983;
// console.log(balance); //
// console.log(balance.toString()); // gives string
// console.log(balance.toFixed(1)); //round offs upto(n) points
// console.log(balance.toPrecision(7)); //gives of (n) numbers in round off

// let hundreds = 10000000;
// console.log(hundreds.toLocaleString()); // default US standereds of commas
// console.log(hundreds.toLocaleString("en-in")); // indian standards of commas

// ------------------------Maths---------------------//

console.log(Math.abs(-4)); //.absolute(abs) used to change negative to positive only
console.log(Math.round(4.65)); // rounds off (normally)
console.log(Math.ceil(4.65)); // rounds off (takes higher value)
console.log(Math.floor(4.65)); // rounds off (takes lower value)
console.log(Math.min(3, -2, 4, 1, 4, 4)); // gives out min value
console.log(Math.max(3, 2, 4, 1, 4, 4)); // gives out max value
console.log(Math.random()); //gives out random value between 0-1
console.log(Math.random() * 10); //gives out random value between 0-10
console.log(Math.random() * 10 + 1); //gives out random value between 1-10

//! important formula for the generation of random numbers
const min = 1;
const max = 86;

console.log(Math.floor(Math.random() * (max - min) + min));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// console.log(ObjectNum.toString().replace(/2/g, `32`));

// //! numbers and maths in javascript

// let score = 300; // already defind as number datatypes

// let newscore = new Number(32297098709709); // this creates a number object

// let x = newscore.toString(); // changes the score from number to string

// let y = newscore.toString().length; // this means we can use string properties on the number now

// console.log(` here the ${x} is the value  ${y} is the length of the value`);

// // ===================== Number Properties & Methods Notes =====================

// //! Number Declaration
// let num1 = 42; // primitive number (typeof: "number")
// console.log(typeof num1); // "number" (shows the type)

// let num2 = Number(42); // primitive number using Number() (typeof: "number")
// console.log(typeof num2); // "number" (shows the type)

// let numObj = new Number(42); // Number object (typeof: "object")
// console.log(typeof numObj); // "object" (shows the type)

// //! Number Properties'G0q77>a50TkG'
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (largest possible number)
// console.log(Number.MIN_VALUE); // 5e-324 (smallest positive number)
// console.log(Number.POSITIVE_INFINITY); // Infinity (positive infinity)
// console.log(Number.NEGATIVE_INFINITY); // -Infinity (negative infinity)
// console.log(Number.NaN); // NaN (not-a-number)

// //! Number Methods
// let n = 12345.6789;>

// console.log(n.toString()); // "12345.6789" (convert to string)
// console.log(n.toFixed(2)); // "12345.68" (round to 2 decimal places, returns string)
// console.log(n.toPrecision(6)); // "12345.7" (total 6 digits, returns string)
// console.log(n.toExponential(2)); // "1.23e+4" (exponential notation, returns string)
// console.log(Number.isNaN(n)); // false (checks if value is NaN)
// console.log(Number.isFinite(n)); // true (checks if value is finite)
// console.log(Number.isInteger(n)); // false (checks if value is integer)
// console.log(Number.parseInt("42px")); // 42 (parses integer from string)
// console.log(Number.parseFloat("42.42px")); // 42.42 (parses float from string)

// //! Math Object Methods
// console.log(Math.abs(-7)); // 7 (absolute value)
// console.log(Math.round(4.6)); // 5 (round to nearest integer)
// console.log(Math.ceil(4.2)); // 5 (round up)
// console.log(Math.floor(4.8)); // 4 (round down)
// console.log(Math.min(1, 2, 3)); // 1 (minimum value)
// console.log(Math.max(1, 2, 3)); // 3 (maximum value)
// console.log(Math.random()); // random number between 0 and 1
// console.log(Math.pow(2, 3)); // 8 (2 to the power of 3)
// console.log(Math.sqrt(16)); // 4 (square root)
// console.log(Math.trunc(4.9)); // 4 (remove decimal part)
