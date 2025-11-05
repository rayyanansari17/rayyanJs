// synchronous Vs asynchronous


//synchronous

/*
in synchronous code, each line runs one after another , waiting for the previos one to finish before moving on.

// JS wits for each line to complet before running the next line

// these run innediately, line-by-line, and block the next task until they finish.

*/

// example ==>
console.log("step 1");
console.log("step 1");
console.log("step 1");




// // | Type                            | Example                                                    |
// // | ------------------------------- | ---------------------------------------------------------- |
// // | Normal code execution           | `console.log()`, variable declarations                     |
// // | Math operations                 | `let sum = a + b;`                                         |
// // | Loops                           | `for`, `while`, `do...while`                               |
// // | Conditional statements          | `if`, `else`, `switch`                                     |
// // | Function calls (normal)         | `function myFunc() {}` → `myFunc();`                       |
// // | JSON parsing                    | `JSON.parse()`, `JSON.stringify()`                         |
// // | DOM manipulation (usually)      | `document.getElementById()`, `element.innerHTML = "..."`   |
// // | Error handling                  | `try { ... } catch (err) { ... }`                          |
// // | Blocking alerts                 | `alert()`, `prompt()`, `confirm()`                         |

// these executes in order and block the call stack until done 