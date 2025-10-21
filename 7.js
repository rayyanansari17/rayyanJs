// function scope

function hello(){
    var a = 10
    console.log(a)
}
hello()


function hey(){
    let b = 20
    console.log(b)
}
hey()



function okay(){
    const c = 30
    console.log(c);

}
okay()


/*

var inside the function scope works but not works outside the function blocks
let inside the the fuct scope work but not outside the block
const same 
all inside yes but outside no 
*/