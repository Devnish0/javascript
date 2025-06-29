const name = "kachua";
const repocount = 50;

console.log("hello my name is " + name + " and my repo count is " + repocount);

//! can do that but is not ideal to do it like this;

//! instead we can do it like this (string interpolation)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

//-----------------------------------------------------------------------------------------------------//

const name3 = new String("devnish"); // another way of assigning datatypes
console.log(name3);

console.log(name3[0]); // accessing key value pair

console.log(name3.length); // we can use variable.(something )  to access different things
//example this above expression tells me the length of string

console.log(name3.__proto__);

// Difference between primitive string and String object:
const primitiveStr = "hello"; // primitive string (stack memory)
const objectStr = new String("hello"); // String object (heap memory)

console.log(typeof primitiveStr); // "string" (primitive)
console.log(typeof objectStr); // "object" (String object)

console.log(primitiveStr == objectStr); // true (values are equal)
console.log(primitiveStr === objectStr); // false (different types)

// Most of the time, use primitive strings. String objects are rarely needed.

//-----------------------------------------------------------------------------------------------------//

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

console.log(str2);

//----------------------------------------------------------------------------------------------------//

let test1 = `Devnish is great`;

// ===================== Searching Methods =====================
console.log(test1.indexOf(`i`)); // 4 (returns the index of the first occurrence of 'i')
console.log(test1.lastIndexOf(`t`)); // 15 (returns the index of the last occurrence of 't')
console.log(test1.includes(`is`)); // true (returns true if 'is' is present)
console.log(test1.startsWith(`Devnish`)); // true (returns true if string starts with 'Devnish')
console.log(test1.endsWith(`great`)); // true (returns true if string ends with 'great')
console.log(test1.search(`is`)); // 8 (returns the index of the first occurrence of 'is')
console.log(test1.match(/is/g)); // [ 'is' ] (returns an array of all occurrences of 'is')

// ===================== Modifying Methods =====================
console.log(test1.replace(/is/g, `was`)); // Devnwash was great (replaces all 'is' with 'was')
console.log(test1.slice(0, 6)); // Devnis (returns substring from index 0 to 6)
console.log(test1.substring(0, 6)); //! Devnis (returns substring from index 0 to 6) can be negative
console.log(test1.substr(0, 6)); // Devnis (returns substring from index 0 to 6)
console.log(test1.toLowerCase()); // devnish is great (converts to lowercase)
console.log(test1.toUpperCase()); // DEVNISH IS GREAT (converts to uppercase)
console.log(test1.trim()); // Devnish is great (removes whitespace from both ends)
console.log(test1.split(" ")); //![ 'Devnish', 'is', 'great' ] (splits string into array by spaces)
console.log(test1.concat("!!!")); // Devnish is great!!! (joins another string to the end)
console.log(test1.repeat(2)); // Devnish is greatDevnish is great (repeats the string twice)
console.log("5".padStart(3, "0")); // 005 (pads the string at the start to length 3)
console.log("5".padEnd(3, "0")); // 500 (pads the string at the end to length 3)
console.log(test1.replace("Devnish", "rahua")); // rahua (replaces the character with given one)

// ===================== Accessing Methods =====================
console.log(test1.charAt(0)); // D (returns character at index 0)

// ===================== Comparing Methods =====================
console.log("a".localeCompare("b")); // -1 (compares two strings in the current locale)

// ===================== converting an string into array=====================

const ConvrtToArr = `Devnish-is-better-than-mahua`;

console.log(ConvrtToArr.split("-"));
