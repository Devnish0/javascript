// there are two types of datatypes (on the basis of how the data gets stored in the memory and how we can access them)
//! primitive (7 types) >>>
//? String, Number, Boolean, null, undefined, Symbol, BigInt
/* String = ""(empty string) */ const name = "nishank";
/* Number = 1,2,3             */ const score = 6969;
/* Boolean = true , False;     */ let IsUserLoggedIn = false;
/* Null =not 0,"" but>>> empty */ let TempOutSide = null;
/* Undefined= declared a variable but didnt assigned any value; */ let Value;
/* Symbol= used for used to make any value unique */ const Id = Symbol("123");
/* BigInt=  for scintific values big values */ let bigNumber =
  1029830129830198471n;

//! non-primitive (reference Type)(3) >>>
//? Array, Object, Function

//* Array

const MyArray = ["Devnish", "twitter", "zero followers"];

//* Object

let myObject = {
  name: "devnish",
  age: 17,
  IsHePassionate: true,
};

console.log(typeof myObject);

console.log(typeof MyArray);

//* Function

let MyFunction = function () {
  console.log("hello world");
};
