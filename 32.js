// Objects in JS

// it is a non primitve ==> you can store multiple data type

// object uses key value pair
// left side is key 
// right side is value
// to acces the value use the key 
// ex: fname : "suhail"
// after every value you need to insert ','
// we store multiple values in curly brackets after assigning object

let person = {
    fname : "rayyan",
    phn : 9573109741,
    age : 23,
    isAlive : true,
    isSleeping :null,
    health : undefined
}
console.log(person);

// to acces any value of the object 
// to access use .along wiith value name ex : console.log(person.age)

console.log(person.fname, person.age);

// another way to access 

console.log(person["fname"])

