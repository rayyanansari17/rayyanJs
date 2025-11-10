// array method 

// 23.slice()

/*
the slice() method is used to copy or extract a portion  of an array (or string) without changing the original one 

*/

// let arr = [10,20,30,40];
// let outPut = arr.slice(1,3)
// console.log(outPut);



// // 24.some() method 

// /*
// the some() method checks if at least one element in an array psses a test (condition). 
// it returns :
// true -> if any element passes the condition 

// false -> if none do 

// */

let arr1 = [2,4,6,8,11]
let output = arr1.every((x) => x % 2 == 0)
let output1 = arr1.some((x) => x % 2 ==0)

console.log(output);
console.log(output1);