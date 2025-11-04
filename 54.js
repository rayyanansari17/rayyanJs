// 4. Object.freeze
/*
you cannot add remove  or change properties

it makes the object completely imutable 
*/



let person ={
    fname : "rayyan",
    age : 22,
    city : "hyd"
}
console.log(person);
console.log(Object.freeze(person))
console.log(Object.isFrozen(person))
person.phone = 504045083
person.age = 24
delete person.city
console.log(person);