//syntax

let p = new Promise((resolve, reject) => {
    let a = 1 + 9
    if (a == 2) {
        resolve('success')
    } else {
        reject('Failed')
    }
})

//resolve contains single argument so, here p.then contains only one element
//then is called if resolved successfully , catch is called if it's rejected
p.then((message) => {
    console.log('This is the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})