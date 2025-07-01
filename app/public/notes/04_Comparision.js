//? Operand - on which the the operators are applied on for examples in 2*3  the 2 and 3 are operands
//? unary - operator is called urinary if it has only single operand for example in x = -1 here (-) is unirary negation
//? binary - if it has two operands example (y-x)

//! for more info visit https://javascript.info/comparison

console.log(2 > 1); //2 is greater than 1
console.log(2 == 1); // 2 is equal to 1

console.log(2 >= 1); // 2 is greater than equal to 1
// the working of this operator is
// ! the 'left side is greater than "OR" equal to the left side;

console.log(2 < 1); // 2 is less than 1
console.log(2 != 1); // 2 is not equal to 1

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("2" > 1); //true //js automatically converted the string to number
console.log("02" > 1); // similar

//!!!
console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true

//! okay lets learn something new again why this is happening
//? ==(equality checks) and <= , >= , > , <(comparisions) works differently
//? comparisions convert "NULL" to number treating it as "0"
//? thats why
//* null == 0  ( equality checks doesnt convert ie no null is not equal to 0)
//* null > 0 (comparision convert null into "0" ie 0 is is not greater than 0 )
//* null >= 0 ( comparision conver null into "0" ie ues 0 is not greater than but equals to "0")

//!string comparision

let result = "C" > "B";
console.log(result);
console.log("B" > "C");

//! difference between "==" and "==="

//* "==" convert the data type and try to make it as easy as possible
/* ? examples */
console.log("" == false); // false because empty string denotes false
console.log("9" == 9); // converts the string into number

//* "===" this strictly check the datatype also and does not care tbh
/* examples */
console.log("9" === 9); // false because stringed 9 is not equals to numbered 9
console.log(null === 0); // false
