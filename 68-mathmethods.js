// math methods 

/*
in js , the math object provides a set of built in mathematical methods and constants for performing commom math operations like rounding numbers , generating random values, trigonometry, logarithms, etc

 */
// return absolute positive value

// let n1 = Math.abs(-5)
// console.log(n1);

// // rounds to nearest integer

// let n2 = Math.round(4.5)
// console.log(n2);


// // rounds up

// let n3 = Math.ceil(4.2)
// console.log(n3);


// // rounds down

// let n4 = Math.floor(4.9)
// console.log(n4);


// // removes decimal point

// let n5 = Math.trunc(4.9)
// console.log(n5);



// // returns 1,-1,or 0(sign of numbers )

// let n6 = Math.sign(3)
// console.log(n6);



// Random Number 
/*
returns random number between 0 (insclusive)
and 1 (exclusive) 

Math.random() ---- output 0.4433434

custom range - random between min to max 
Math.random() * (max - min) + min
example (1-10) random integer between 1 to 10

Math.floor(Math.random() * 10) + 1


*/

let min = 1
let max = 100

// console.log(Math.random() * (max - min) + min);
console.log(Math.floor(Math.random() * (max - min) + min));
