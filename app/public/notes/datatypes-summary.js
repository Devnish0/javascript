// there are two types of datatypes (on the basis of how the data gets stored in the memory and how we can access them)
//! primitive (7 types) >>>
//? String, Number, Boolean, null, undefined, Symbol, BigInt
/* String = ""(empty string) */ const name1 = "kachua";
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

//* Function

let MyFunction = function () {
  console.log("hello world");
};

console.log(typeof name1); //string

console.log(typeof score); //number

console.log(typeof IsUserLoggedIn); //boolean

console.log(typeof TempOutSide); //obeject

console.log(typeof Value); //undefined

console.log(typeof Id); //symbol

console.log(typeof bigNumber); //bigint

console.log(typeof MyArray); //object

console.log(typeof myObject); //object

console.log(typeof MyFunction); // function (opject-function)
//
//
//
//

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// memory types (stack) (heap)

//! stack(primitive) heap(non primitive)

//?stack memory

let UserEmail = "User@gmail.com";

anotherUserEmail = UserEmail; // givees a comy of UserEmail and changing the anotherUserEmail doesnt change the original value of Usermail

anotherUserEmail = "anotherUserEmail";

console.log(UserEmail);

console.log(anotherUserEmail);

//! heap(non primitive)

let User = {
  email: "pawan kumar",
  age: 34,
};

let User2 = User; // in heap memory the User2 will have complete control on opject of User;

User2.email = "rahuaji"; // changed the email in user2 >> also chnages the email in user (heap memory functions)

console.log(User.email);

console.log(User2.email);

let arr = new Array("kachua", "gangwar");

console.log(arr[1]);
