// dates in js 
/*
jas date and time 
in javascript date and time are represent by the date object . the date object provides the date and time information and also provides various methods 

a javascript date defines the ECMAScript epoch that represents milliseconds since 1 january 1970 UTC, this date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).


creating date objects 
there are four ways to create a date object 

new Date()
new Date(milliseconds)
new Date(Date string)
new Date(year, month,day,hours,minutes,seconds,milliseconds)

javascript has a built in Date object to handle dates and times.


*/


// const date1 = new Date("2025-11-10t11:23:45.453Z")
// console.log(date1);

// const date2 = new Date(2025,11,10,19,14,29)
// console.log(date2);

// const date3 = new Date(1763000000000)
// console.log(date3);

const now = new Date();
console.log(now);

// 1.getMilliseconds()

const millDate = now.getMilliseconds()
console.log(millDate);


const fYear = now.getFullYear()
console.log(fYear);

const mnth = now.getMonth()
console.log(mnth);

const date = now.getDate()
console.log(date);

const day = now.getDay()
console.log(day);

const hrs = now.getHours()
console.log(hrs);

const min = now.getMinutes()
console.log(min);

const sec = now.getSeconds()
console.log(sec);


const milsec = now.getMilliseconds()
console.log(milsec);


// how to get till now milliseconds

console.log(now.getTime());

// another method to get till now variable 

let tillnowMill = Date.now()
console.log(tillnowMill);

// 3rd

let tilNow = +new Date()
console.log(tilNow);