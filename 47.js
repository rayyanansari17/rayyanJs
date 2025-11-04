// factorial in JavaScript
// 5! = 5x4x3x2x1 ==> 120

// let result = 1
// for(let i = 5; i >0; i-- ){
//     // result = result*i;
//     result *= i
//     console.log(result);
// } 



// function fac (n){
//     let finalOutput = 1

//     for (n; n>0; n--){
//         finalOutput *= n

//     }
//     return finalOutput
// }

// let answer = fac(5)
// console.log(answer);

// with recursion


function factorial (a){
    if (a == 0 || a == 1) return 1;
    return a * factorial(a-1);
}

let output = factorial(5);
console.log(output);