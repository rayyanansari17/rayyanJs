// scoping in javascript
// there are 3 types of scoping in js 

// 1. Block Scope
// 2. Function Scope
// 3. Global scope


// Block Scope

/*
{

}
*/

// Block Scope         VAR  LET  CONST
// INside Of Block      Y    Y     Y
// Outside of Block     Y    -     -


{
    var a = 10 
}
console.log(a)





{
    const c = 10
    
}
console.log(c)

/*
when using 'let' in block scope the console.log when inside the block gives the output but 
when the console is out of the block the output is not given and error occurs 

same for const in block scope 

but for var the consloe works inside and outside of the block 
*/
