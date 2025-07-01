let score = 300; // already defind as number datatypes

let newscore = new Number(32297098709709); // this creates a number object

let x = newscore.toString(); // changes the score from number to string

let y = newscore.toString().length; // this means we can use string properties on the number now

console.log(` here the ${x} is the value  ${y} is the length of the value`);

// ===================== Number Properties & Methods Notes =====================

// Number Declaration
let num1 = 42; // primitive number (typeof: "number")
console.log(typeof num1); // "number" (shows the type)

let num2 = Number(42); // primitive number using Number() (typeof: "number")
console.log(typeof num2); // "number" (shows the type)

let numObj = new Number(42); // Number object (typeof: "object")
console.log(typeof numObj); // "object" (shows the type)

// Number Properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 (largest possible number)
console.log(Number.MIN_VALUE); // 5e-324 (smallest positive number)
console.log(Number.POSITIVE_INFINITY); // Infinity (positive infinity)
console.log(Number.NEGATIVE_INFINITY); // -Infinity (negative infinity)
console.log(Number.NaN); // NaN (not-a-number)

// Number Methods
let n = 12345.6789;

console.log(n.toString()); // "12345.6789" (convert to string)
console.log(n.toFixed(2)); // "12345.68" (round to 2 decimal places, returns string)
console.log(n.toPrecision(6)); // "12345.7" (total 6 digits, returns string)
console.log(n.toExponential(2)); // "1.23e+4" (exponential notation, returns string)
console.log(Number.isNaN(n)); // false (checks if value is NaN)
console.log(Number.isFinite(n)); // true (checks if value is finite)
console.log(Number.isInteger(n)); // false (checks if value is integer)
console.log(Number.parseInt("42px")); // 42 (parses integer from string)
console.log(Number.parseFloat("42.42px")); // 42.42 (parses float from string)

// Math Object Methods
console.log(Math.abs(-7)); // 7 (absolute value)
console.log(Math.round(4.6)); // 5 (round to nearest integer)
console.log(Math.ceil(4.2)); // 5 (round up)
console.log(Math.floor(4.8)); // 4 (round down)
console.log(Math.min(1, 2, 3)); // 1 (minimum value)
console.log(Math.max(1, 2, 3)); // 3 (maximum value)
console.log(Math.random()); // random number between 0 and 1
console.log(Math.pow(2, 3)); // 8 (2 to the power of 3)
console.log(Math.sqrt(16)); // 4 (square root)
console.log(Math.trunc(4.9)); // 4 (remove decimal part)

let input = "df"; // try "abc" or 2

if (isNaN(Number(input))) {
  console.log("bhdwe ho kia");
} else {
  console.log("thank you");
}
