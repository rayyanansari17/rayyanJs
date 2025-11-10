// JSON Methods
/*
JSON methods in JS

js provides two main global methods under the json objects 

1. JSON.stringify()
converts a js object -> JSON string

2. JSON.parse()
converts a JSON string -> jacascript object 

*/


let person = {
    fullName: "rayyan ansari",
    age: 23,
    isAlive: true,
    isSleeping: null 
}

console.log(person);
console.log(typeof person);

let final = JSON.stringify(person)
console.log(final);
console.log(typeof final);

let person1 = `{"fullName":"rayyan ansari","age":23,"isAlive":true,"isSleeping":null}`

console.log(person1);
console.log(typeof person1);

let toObject = JSON.parse(person1)
console.log(toObject);
console.log(typeof toObject);