// for in loop

/*
it is used to loop through the properties (keys) fo an object or values

*/

let details = {
    fname : "rayyan",
    age : 23,
    isAlive : true,
    isSleeping : null,
    isAwake : undefined
}

for (let keys in details){
    console.log(details[keys]);
}