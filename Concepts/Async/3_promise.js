//promise takes two parameter with condition of resolve or reject. 
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

//we use . then to decide or access promise 
promise.then(result => console.log(result));