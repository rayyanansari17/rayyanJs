// asynchronous timer functions

/*
timer function let you schedule code execution, either after a delay or repeatedly at intervals.
they are part of the web APIs (in browsers) or Node.js global timers (in backend JS)

*/

// 1.setTimeout()

// console.log("step 1")
// console.log("step 2")
// console.log("step 3")


// console.log("step 1");

// setTimeout(() => {
//     console.log("step 2");
// }, 5000);

// console.log("step 3");



// // ex 2

// console.log("step 1");
// setTimeout(() => console.log("step 2"), 1000)
// setTimeout(() => console.log("step 3"), 3000)

// console.log("step 4");



// 2. setInterval()
/* 
the setInterval() method repeatedly calls a function or executes a code snippet, with fixed time delay between each call 

it continues running until you stop it using clearInterval()

*/

// setInterval (() => {
//     console.log("hello CFI");
// }, 2000)


let count = 1;

const timer = setInterval(() => {
    console.log("HELLO CFI ");
    console.log(count);
    count ++

    if (count == 11) {
        console.log("stopped");
        clearInterval(timer)
    }
    },1000)




// callback function