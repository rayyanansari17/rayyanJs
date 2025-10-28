// try catch in JS

/*
the try ...catch statement in JavaScript is used to handle runtime error- it lets your code keep running even if something goes wrong 

 */

// basic syntax 

// try{
    
// }catch (error) {
//     console.log(error);
// }

try {
    let a = 10;
    console.log(b);
}catch (error) {
    // console.log("bhai error aagaya watt lag gayi");
    // console.log(error.name, ":" ,error.message);
    console.log(error.stack);
}