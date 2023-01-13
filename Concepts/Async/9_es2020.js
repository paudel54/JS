const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 3000))

const promiseTwo = new Promise((resolve, reject) => setTimeout(resolve, 3000))

Promise.all([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e));



// we can use allSettled instead of all
//advantage of allSettled is that no matter if any promise fails it executes, unlike Promise.all in ES6

//Promise.allSettled([promiseOne, promiseTwo]).then(data => console.log(data)).catch(e => console.log('something failed', e));