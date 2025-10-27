// Hoisting 
hello()
hello()

function hello(){
    console.log("hello");
}

hello()
hello()



hi() // hoisting doesnt work with arrow functions or where variable is declared
let hi = () =>{
    console.log("hi");
}
