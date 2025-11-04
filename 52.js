// array method

// reduce() method

/*
the reduce() method runs a function on each elements of an array to reduce it toa sing;e value (like sum, product, or combined results)

*/

// reduce method has 3 parameters

// 1. accumulator => stores the previous step
// 2. currentValue => current array element
// 3. initialValue => starting value

let number = [10,20,30,40,50]

let total = number.reduce((acc,curr) =>{
    return acc + curr
}, 0)

console.log(total);


let word = ["h","e","l","l"]
let str = word.reduceRight((a,b) => {
    return a + b
})
console.log(str);