// 5. arrow functions

function hello(){
    console.log("hello");
}
hello()




let add = function (num1, num2){
    return num1 + num2;
}

let total = add(10,5)
console.log(total);



// arrow function, this function update was in ES6

let add1 = (num, num3) =>{
    return num + num3
}

let total1 = add1(10,20);
console.log(total1);

