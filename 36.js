// array methods 
// there are 30 types of array method 
// and there almost 15 to 20 methods of object 

//1. at() method

let arr =["hi","hello", "hey"]
console.log(arr.at(0));
console.log(arr.at(2));

// // index ==> value

// // 2. concat() method

// let arr1 = [10, 20, 30]
// let arr2 = [40, 50, 60]

// let total = arr1.concat(arr2)
// console.log(total);

// console.log(arr1.concat(arr2));


// 3. fill() method


// let fruits = ["apple", "banana", "orange"]

// let total = fruits.fill("pineapple")
// console.log(total);

// fill is a method which replace all the index values to a given value


// 4. indexof() method

// let numb = ["one", "two", "three", "four"]

// console.log(numb.indexOf("one"));
// console.log(numb.indexOf("five"));
// console.log(["one","two"].indexOf("one"));

// its an array method which takes input as value 
// and gives as index value 
// if no value is present in array then the index value will be -1

// 5.lastindexOf()

// let arr = [10,20,30,40,50,60,20,10,20]

// console.log(arr.lastIndexOf(10));



// 6. lenght()

// let arr4 = [10,20,30,40,50,60]

// console.log(arr4.length);


// 7. push() method


// push is an array method which add
// new element in the last position
//of the array

// let arr5 = [10, 20, 30]
// arr5.push(40)
// console.log(arr5);

// 8. pop() method

// which deletes the last element from the array 

// let arr6 = [20,30,40,50]
// arr6.pop()
// console.log(arr6);

// 9. unshift()

// let arr7 =[10,20,30]

// arr7.unshift(100)
// console.log(arr7);

// // add the value from first


// // 10. shift()

// let arr8 = [10,20,30]
// arr8.shift()
// console.log(arr8);



//push() : add the value/element from the last 

// pop() : remove the element from the last 

// unshift() : add the value/element from the first 

// shift() : remove the value from the first of an array

// 11. include() method 

// let arr9 = ["kaif","ashraf","rayyan"]
// console.log(arr9.includes("saboor"));

// which check if the input value is there in the array or not 
// also gives the output value in boolean form


// 12. join() method 

// let arr10 = ["saboor","rayyan", "kaif",""]
// console.log(arr10.join(" "));

// // whatever we are putting in join it will change the elements btw variables ex : saboor, rayyan will be changed to saboor| rayyan when given '|' in join.


// // 13.reverse method

// let arr11 = ["rayyan", "kaif", "ali"]
// console.log(arr11.reverse());

// let arr12 = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr12.reverse());


// let arr13 = [8,2,4,7,1]
// console.log(arr13.reverse());


// 14. sort() method


// let arr14 = [9,5,6,2,3,7,8,1,4,10]

// console.log(arr14.sort((a,b) => b - a));
// console.log(arr14.sort((a,b) => a - b));

// IIFE (immeditaitly invoke function expression -- ()=>{})


// 15. flat() method 

let arr15 = ["hello", "hie",["bye","test"], "ok"]

console.log(arr15.flat());

// shows nested arrays into single dimensional array


// 16.Array.of() method

// this method is use to create a new array
// without using square brackets 

let output = Array.of("hi","hello", "hey")

console.log(output);



// homework 

// every() method
// find() method
// findIndex() method
// forEach() method
// map() method
// reduceRight() method
// reduce() method 
