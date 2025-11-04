// // at method 

// let arr = [1,2,3,4,5,6]
// console.log(arr.at(2));


// // concat method

// let arr1 = [5,6,7,8,9]
// let arr2 = [1,2,3,4,5]

// console.log(arr1.concat(arr2));

// //fill method

// let arr4 = ["mango", "bananana", "orange"]
// arr4.fill("pineapple")
// console.log(arr4);

// indexof method

// let arr5 = [1,2,3,4,5,6,7,8]

// console.log(arr5.indexOf(7));


// // lastIndexOf method

// let num = [1,2,3,4,5,7,8,2,3,4,6]

// console.log(num.lastIndexOf(3));

// // length method

// let num1 = [9,8,7,6,5,4,3,2,1]
// console.log(num1.length);

// //push method

// let arr6 = [5,6,7,8]
// console.log(arr6);
// console.log(arr6.push(9));
// console.log(arr6); 


//pop method

// let arr7 = [5,6,7,8,9]
// console.log(arr7);
// arr7.pop(9)
// console.log(arr7);

// //unshift method

// let num3 = [1,2,3,4,5,3]
// console.log(num3);
// console.log(num3.unshift(0));
// console.log(num3);


// shift method

// let arr8 = [0,1,2,3,4,5]
// console.log(arr8);
// arr8.shift()
// console.log(arr8);

// // include method

// let ar1 = [1,2,3,4,5,6,7]
// console.log(ar1.includes(4));

// join method

// let ar2 = ["ryyn","kaif","malik","ahmed"]
// console.log(ar2.join(" | "));

// reverse method

// let ar3 =[1,2,3,4,5,6,7,8,9,10]
// console.log(ar3.reverse());

// sort

// let ar4 =[5,3,1,7,4,2,10,8,3,9,6]
// console.log(ar4.sort((a,b)=> a-b));

// //flat method

// let ar5 = [1,2,3,[4,5,6,7],8,9,10,]
// console.log(ar5.flat());


//Array.of method

// let output = Array.of("rayyan","kaif","saboor","ahmed")
// console.log(output);

// //every method

// let numb = [-1,2,4,6,8]
// let check = numb.every((x) => x > 0)
// console.log(check);


// find method

// let num2 = [2,4,6,8,10]
// let check2 = num2.find((x) => x % 2 ==0)
// console.log(check2);

// //findIndex method

// let num3 = [2,3,4,5,6,7,8]
// let check3 = num3.findIndex((x) => x > 6)
// console.log(check3);

//forEach method

// let  num5 = [1,2,3,4,5,6]
// console.log(num5);
// num5.forEach((x) =>{
//     console.log(x + 5);
// })
// console.log(num5);

// map method

// let n = [1,2,3,4,5]
// console.log(n);
// let final = n.map((x) => x*2)
// console.log(final);
// console.log(n);

// filter method

// let n1 = [1,2,3,4,5,6,7,8,9,10]
// console.log(n1);
// let final1 = n1.filter((x) => x > 5)
// console.log(final1);

// // slice method 

// let n2 = [10,20,30,40,50]
// let result = n2.slice(1,3)
// console.log(result);

// some method

let n3 = [2,4,6,8,11]
let out = n3.some((x) => x % 2 == 0)
console.log(out);

// reduce 

let number = [10,20,30,40,50]
let total = number.reduce((acc,curr) => {
    return acc + curr
},0)
console.log(total);

//reduceRight

let number1 = [10,20,30,40,50]
let total1 = number.reduceRight((acc,curr) => {
    return acc * curr
},)
console.log(total1);


