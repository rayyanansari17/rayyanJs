// promises in JS

/*
a promise is an object that represents the eventual completion or failure of an asynchronous operation 

i'll fetch the data (pending).... if it works, i'll resolve it, if it fails, i'll reject it 
*/

const promise = new Promise ((resolve, reject) =>{
    let success = false
    if (success){
        resolve("task completed")
    } else {
        reject("task failed")
    }
})
console.log(promise);

/// example

// function timerCallback(callback,seconds) {
//     console.log(`waiting for ${seconds} seconds....`);
//     setTimeout(()=>{
//         callback(`Done after ${seconds} seconds!`)
//     }, seconds * 1000)
// }

// timerCallback((msg) =>{
//     console.log(msg);
// }, 2)

// v2

function timerPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject("invalid time!");
    } else {
      setTimeout(() => {
        resolve(`dome after ${seconds} seconds!`);
      }, seconds * 1000);
    }
  });
}
// timerPromise(2)
// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))


// // v3 is ==> promise chaining

// timerPromise(1)
// .then((msg) => { 
//     console.log(msg)
// return timerPromise(2)
// })
// .then((msg) =>{
//     console.log(msg)
//     return timerPromise(3);
// })

// .then((msg) => console.log(msg))
// .catch((err) => console.log(err))
// .finally(() => console.log("all timers done!"))


// v4 Promise.all()
// run all timers together and wait for all to finish 
// Promise.all([timerPromise(1), timerPromise(2), timerPromise(3)])
// .then((results)=> console.log("all done:", results))
// .catch((err) => console.log(err))

// // v5 ==> Promise.race()
// // run all timers together, but only get the first one that finishes 

// Promise.race([timerPromise(1), timerPromise(2), timerPromise(3)])
// .then((result)=> console.log("all done:", result))
// .catch((err) => console.log(err))


//v6 ==> async / await (modern syntax)

async function finalRunner() {
    try{
        let timer1 = await timerPromise(1)
        console.log(timer1);

        let timer2 = await timerPromise(2)
        console.log(timer2);

        let timer3 = await timerPromise(3)
        console.log(timer3);
    } catch (error) {
        console.log(error);
    }
}
finalRunner()