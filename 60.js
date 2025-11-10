// Java Script ES6

/*
java script ES6 (also known as ECMAScript2015 or ECMAScript is the sixth edition of javaScript introduced in june 2015

ECMAScript (European Computer Manufacturers Association Script) is the 
standard specification of JS to ensure compatibility in all browsers and envoronment.
the tutorial provides a summary of commonly used features and syntax improvements of ES6.



*/

// 1. let & const 

// let a = 10 
// console.log(a);

// // 2. arrow functions 
// // 3. template literals

// // 4. default parameters

// function a (b = "guest", n = 0){
//     console.log(`my name is ${b} and my age is ${n}`);
// }
// a()

// // 5. destructuring assignment 

let person = {
    fname : "rayyan",
    age : 20,
    isAlive : true,
    isSleeping : null

}

let {fname, age, isAlive, isSleeping } = person;
console.log(fname, age, isAlive, isSleeping);


// // 6. array destructuring assignment 

// let arr = ["suhail", 20, null, true, undefined]

// let [a,b,c,d,e] = arr
// console.log(a,b,c,d,e);