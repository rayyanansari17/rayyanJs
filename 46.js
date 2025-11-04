// recursion

/*
recursion is when a function call itself to solve a smaller version if the same prol=blem until it reaches a base case (a stoping point)

*/

// function hello(){
//     console.log("hello world");
//     hello()
// }
// hello()

// first 12 th line is executed then it goes to 
// function hello 8th line
// then goes to 9th line print hello world
// then goes to 10th line and print then 
// again goes to 12th line and same it get in infinite loop 

function call (num){
    console.log("num value =", num); // printing num value
    if(num == 0) {
        return console.log("stopped");
    }
    console.log("calling the function");
    call (num-1)

}
call(5);