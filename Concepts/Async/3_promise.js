//promise takes two parameter with condition of resolve or reject. 
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke');
    }
})

//we use . then to decide or access promise 
//promise.then(result => console.log(result));

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    //catch auto detect the if present error and shows onto terminal.  but the error must be present above the catch method
    .catch(() => console.log('error'))
    .then(result3 => {
        console.log(result3 + '!')
    })

const promise2 = new Promise((resolve, reject) => { setTimeout(resolve, 100, 'HIII') })

const promise3 = new Promise((resolve, reject) => { setTimeout(resolve, 1000, 'POOKIE') })

const promise4 = new Promise((resolve, reject) => { setTimeout(resolve, 5000, 'Is it me you are looking for?') })

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })