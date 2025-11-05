// number methods

// 1. parseFloat()

// they are built-in JavaScript functions that convert strings into numbers

// convert to decimal number 
// string to number

// console.log(parseFloat("43.5"));  // 43.5
// console.log(parseFloat("99.43cm23")); // 99.43
// console.log(parseFloat("cm 93.233"));  // NaN
// console.log(parseFloat("a12b3c"));  // NaN


// 2. parseInt

// converts to number 
// we use parse int for number systems 
// 15
// 10
// 8
// 100
// 99

// console.log(parseInt("1111", 2));
// console.log(parseInt("1010", 2));
// console.log(parseInt("1000", 2));
// console.log(parseInt("1100100", 2));
// console.log(parseInt("1100011", 2));

// console.log(parseInt("45.4543"));



// toFixed()

// let num = 57.77583
// console.log(num.toFixed()); // round of to nearest number value
// console.log(num.toFixed(1)); //gives 1 number after the decimal
// console.log(num.toFixed(2)); // gives 2 number after the decimal
// console.log(num.toFixed(7)); // adds more 2 '00' if the decimal is not there 


//toLocaleString()

/*
toLocaleString() is a number method that formats a number according to a specific locale (country/language) or style - like adding commas, currency , or percentage 

// syntax  ==> number.toLocaleString([locales],[options])

locales -> optional string like "en-US", "hi-IN", "de-DE", etc
(defines language and region format )

options -> optional object to control formatting style 
(currency, decimals, etc)

*/



let num1 = 1234567.8934

// console.log(num1.toLocaleString("en-US"));
// console.log(num1.toLocaleString("hi-IN"));
// console.log(num1.toLocaleString("de-DE"));

let price = 2500
console.log(price.toLocaleString("en-US", {style: "currency", currency: "USD"}));
console.log(price.toLocaleString("hi-IN", {style: "currency", currency: "INR"}));
console.log(price.toLocaleString("ja-JP", {style: "currency", currency: "JPY"}));
console.log(price.toLocaleString("ar-SA", {style: "currency", currency: "SAR"}));
console.log(price.toLocaleString("ar-SA", {style: "percent"}));







