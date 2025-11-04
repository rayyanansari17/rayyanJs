// object methods 

// 1.entires method

// converts object to arrays with multidimension nested array 
//returns an array of key-value pairs from an object 


// let person = {
//     fname : "suhail",
//     age :20,
//     isAlive : true 
// }

// let output = Object.entries(person)
// console.log(output);


// // array example

// let arr = [
//     ["fname", "rayyan"],
//     ["age", 20],
//     ["isAlive", true]
// ]
// console.log(arr[2]);



// 2. Object.keys()
/*
returns an array of keys (property names)
of the object 
*/
let user = {
    fname : "rayyan",
    age :20,
    city : "hyd"
}
console.log(Object.keys(user));



// 3. Object.values()



let user1 = {
    fname : "rayyan",
    age :20,
    city : "hyd"
}
console.log(Object.values(user1));

