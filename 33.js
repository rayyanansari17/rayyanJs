// object practice access crud operations

let person = {
    fname : "rayyan",
    phn : 9573109741,
    age : 23,
    isAlive : true,
    isSleeping :null,
    health : undefined
}

// access ==> variableName.key or variableName["key"]
// add
// modify/update
// delete


//add a new value
// // varialbeName.newKay = newValue
console.log(person);
person.address = "Hyderabad"
console.log(person)

// Update an object 
// variableName.oldKey = updatingKey

person.age = 22
console.log(person);


// delete a value 
// delete variableName.key
// delete is a defined keyword in JS where you cannot assign 
// variable name delete to variable 

delete person.phn
console.log(person);


// CRUD operations
// C ==> create
// R ==> read
// u ==> update
// d ==> delete

