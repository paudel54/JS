//node js is used to run async func outside browser

setTimeout(() => { console.log('1', 'is the lonelist number') }, 0)
setTimeout(() => { console.log('2', 'is the lonelist number') }, 10)

//2
Promise.resolve('hi').then((data) => console.log('2', data))

//3
console.log('3', 'is a crowd')