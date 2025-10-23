// type conversions in JS
//Changing datatype from one type to another 

// Ex : let a = "10"
// convert 10 of string to 10 of number

// there are 2 types of conversions in JS
// 1.implicit conversion
// 2. explicit conversion


// 1.implicit conversion : ==> automatic conversion 

// let result = 2 + "";
// console.log(typeof result);

// let a = 1 + "hello"
// console.log(a);

// let c = undefined + "3"
// console.log(c);

// let d = true + "false"
// console.log(d);

// let e = "hello" + "world"
// console.log(e);

// let f = null + "void"
// console.log(f);


let a;
a = "5" - "3";
console.log(a);
a = 10 / "2";
console.log(a);
a = 2 - "hi";
console.log(a); // NaN ==> not a number 

// Anything to boolean

let a1 = "5" - false;
let a2 = 2 + true;
let a3 = 0 + false;
console.log(a3);


// null to number 

let c1 = 4 + null;
console.log(c1);

//undefined to null

let d1 = undefined + 5;
console.log(d1);
let d2 = undefined + true;
console.log(d2);

