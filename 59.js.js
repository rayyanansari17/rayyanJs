// throw in js
/*
 
throw is used to manually create (throw) an error in the code
you can think if it like saying :
"if something goes wrong here , stop everything and jump to the catch block"
 */

try {
  let age = 15;
  if (age < 18) {
    throw "you mush t be 18 yr old ";
  }
  console.log("welcome");
} catch (error) {
  console.log(error);
}

