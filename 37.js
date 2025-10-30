// string method 

// 1. charAt()

let str1 = "hello"
console.log(str1.charAt(4));

// shows the character of the value in index value form

// 2. concat() method

let a1 = "hello"
let b1 = " world"
a1.concat(b1)
console.log(a1.concat(b1));

// 3. includes() method

let c1 = "hello i am CFI student"

console.log(c1.includes("cFI"));


// 4.length() method 

let d1 = "hello how are you"
console.log(d1.length);


// indexOf

let a2 = "hello world"

console.log(a2.indexOf("h"));


// indexOf

let b2 = "hello world"
console.log(b2.lastIndexOf("o"));

// repeat() method

let c2 = "test cfi "
console.log(c2.repeat(10));


// 8. replace() method 

let d2 = "hello world"
console.log(d2.replace("world", "Cfi"));


// 9. split() method

let a3 = "hello world"
console.log(a3.split(" "));


// toUpperCase() method

let b3 = "hello cfi students"
console.log(b3.toUpperCase());


// 11. toLowerCase()

console.log(b3.toLowerCase());


// 12. trim method

let c3 = "    hello i am cfi student   "
console.log(c3);
console.log(c3.trim());


// 13. slice() method

let d3 = "hello"

console.log(d3.slice(1,5));


// 14. padStart() method

let a4 = "hello"
console.log(a4.padStart(10, "*"));

// 15. padEnd() method 

console.log(a4.padEnd(10, "*"));