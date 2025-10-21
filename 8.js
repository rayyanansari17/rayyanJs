// global scope

var a = 10;
let b = 20;
const c = 30;

{
    console.log(a);
    console.log(b);
    console.log(c);
}

function hi(){
    console.log(a,b,c);
}
hi()



// can be accessed and work in inside and out side



// redelcare vs reassign

// redeclare means using var let const 2 times
// while updating 
// redeclare works in only var

// reassign means without using var let
// while updating 
// reassign work in var let 


//redeclare 

var a = 10 ;
var a = 20;
console.log(a);
// here we can re declare var


let fname = "rayyyan";
fname = "ansari";
console.log(fname);

// for let we can redeclare/update  let 
