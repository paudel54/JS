//callback queue -- task queue

setTimeout(() => { console.log('1', 'is the loneliest number') }, 0)
setTimeout(() => { console.log('2', 'is the loneliest number') }, 100)

//job queue or microtask. has higher pirority
Promise.resolve('hi').then((data) => console.log('2', data))


//3
console.log('3', 'is a crowd')