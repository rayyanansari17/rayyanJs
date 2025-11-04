// // 21. map() method

// /*
// map method transforms each element and return a new array 
// return vale : new array

// chainable : yes
// changes original : yes
// common use case : creating new arrays

// ex: creats a new array with modified values and return in a new array by default


// */

// let num = [1,2,3,4,5]
// console.log(num);

// let final = num.map((x) => x * 2)
// console.log(final);
// console.log(num);



// // 22. filter method 
// /*

// the filter method creates a new array filled with elements that passa test (a condition you define in a function)

// it does not change the original array 
//  */


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr1 = arr.filter((x) => x > 5);

// // function test(x) {
// //     return x > 0;
// // }
// console.log(arr1);



// let arr2 = [10,20,30,40,50,60,70,80,90,1000,10]
// let arr3 = arr2.filter((x) => x > 30)

// console.log(arr3);


let classRoom = [
    {
        fname : "saboor",
        age : 81,
        college : "MJ"
    },
    {
        fname : "ibrahim",
        age : 21,
        college : "LRDS"
    },
    {
        fname : "kaif",
        age : 41,
        college : "drop"
    },
    {
        fname : " malik",
        age : 21,
        college: "drop"
    }
]

let output1 = classRoom.filter((a) => a.age < 40);
console.log(output1);



// mutability 

// mutating vs non mutating

/*
push 
pop
shift
unshift
splice 
sort 
reverse
forEach (with forcefully)

// non mutating

map
filter
slice
concat
reduce

*/

