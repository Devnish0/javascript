let score = "31";
console.log(typeof score); //string

// conversion of datatypes in javascript is as follows

let ValueInNumber = Number(score); //number(score) the score is now converted into number datatype

console.log(typeof ValueInNumber); //number

console.log(ValueInNumber); //31

//but problem is
let score2 = "31abc"; // this is a string

let changedDatatype = Number(score2);

console.log(typeof changedDatatype); //number even though "31abc" is not a number still it is forcefully changed to number

console.log(changedDatatype); // NaN

//if number string is changed to number then it prints the actual number
//if something else (31abc) is changed to number it prints Nan

//notes
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

//conversion boolean into number
let IsLoggedIn = false;
let IsLoggedInconverted = Number(IsLoggedIn);
console.log(IsLoggedInconverted); //NaN
console.log(typeof IsLoggedInconverted); //1(true) 0(false)

// false => 0
// true => 1

//conversion of number into boolean

let yes = 9;
let no = -13;
let yes_converted = Boolean(yes);
let no_converted = Boolean(no);

console.log(yes_converted); //true
console.log(no_converted); //false
console.log(typeof yes_converted); //boolean
console.log(typeof no_converted); //boolean

// 1-2-3----- => true
// 0 => false

//conversion of string into boolean
let user = "";
let user2 = "kachua";
let BooleanUser = Boolean(user);
let BooleanUser2 = Boolean(user2);
console.log(BooleanUser); //false
console.log(BooleanUser2); //true
console.log(typeof BooleanUser); //boolean
console.log(typeof BooleanUser2); //boolean

// ""(empty string) => false
// "anything" => true

//conversion of number into string
let Number1 = 2;

console.log(Number1); //2 in numbered form
console.log(typeof Number1); //number

let Stringnumber1 = String(Number1);

console.log(Stringnumber1); //2 in stringed form
console.log(typeof Stringnumber1); //string

// ! notes
// ? conversion boolean into number
// * true => 1
// * false => 0
// ? conversion of number into boolean
// * 1-2-3----- => true
// * 0 => false
// ? conversion of string into boolean
// * ""(empty string) => false
// * "anything" => true
// ? conversion of number into string
// * 23(number) => "23"(string)

/////new thing

console.log("1" + 2); // 12

console.log(1 + "2"); // 12

console.log("1" + 2 + 2); // 122

console.log(1 + 2 + "2"); // 32

console.log(true);

console.log(+true); //2
//! refer to the number 131
console.log(+""); //0

let GameCounter = 100;

GameCounter++; //postfix
// seems same but acts differently
++GameCounter; //prefix

console.log(GameCounter);

//increment decrement prefix postfix ki kahani

let x = 1; // value of x is 1

let a = ++x; // ++x increment first then return // value of a = 2 x = 2

let b = x++; // x++ first return then increment // value of b = 2 x = 3

console.log(a, b, x); // 2,2

//! notes
//? in console,log(1+"1") in this the maths stopps as soon as it meets with the string for examples are below

console.log("1" + 2 + 2); // 122  > the maths stopped at string and passed 122
console.log(1 + 2 + "2"); // 32 > the maths didnt stopped and counted 1+2 and then stopped

//? unary + operator this operator converts its operand into a number

+true + // 1
  false + // 0
  null + // 0
  undefined + // NaN
  "123" + // 123
  "abc"; // NaN

//? its equivalent to

Number(true);
Number("abc");

//?or

console.log(+true); // is equal to
/*    =     */ console.log(Number(true));
