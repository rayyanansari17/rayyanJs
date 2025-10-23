// if else statement

/*
if else is used to run the code conditionally 
only when a specific expression evaluates to true

*/

// there are 3 types of if else statements

// 1. if statement
// 2. if ... else statement
// 3. if .....esle if ...else statement

// if statement

// let age = 16;
// if(age >= 18){
//     console.log("hello adult");
// }
// else
// console.log("hi child");


let age = 12;
// if logic to check the age to vote

if (age >= 18){
    console.log("you can vote");
}
else{
    console.log("you cannot vote");
}


// if ....else if ....else
// if ==> 1st condition
// else if ===>2nd to nth condition
// else ==> false condition

let marks = 24

// i want to make a program 
// based on numbers i want to assign grade

if(marks > 90){
    console.log("A+");
} else if(marks >= 80){
    console.log("A");
}else if(marks >= 70){
    console.log("B+");
}else if(marks >= 60){
    console.log("B");
}else if(marks >= 50){
    console.log("C");
}else if(marks >= 40){
    console.log("D");
}else{
    console.log("You Failed");
}





// if temp is greater than 35 ==> its not 
// if temp is greater than 25 ==>b its nice and normal
// or else cold


let temp = 22;

if( temp >= 35){
    console.log("its hot");
}else if(temp >= 25){
    console.log("its nice and normal");
}else{
    console.log("its cold");
}