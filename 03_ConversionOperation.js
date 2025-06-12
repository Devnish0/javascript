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
let user2 = "nishank";
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
