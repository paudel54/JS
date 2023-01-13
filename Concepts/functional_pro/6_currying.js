//currying 
const multiply = (a, b) => a * b;
var check = multiply(4, 2);
console.log('multipication is :', check);

//application of currying to use parameter one by one 
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(2)(10);
const curriedMultiplyBy5 = curriedMultiply(5);
var store = curriedMultiplyBy5(3);
console.log(store);
console.log(curriedMultiplyBy5(10));

//Partial Application 

const multiplya = (i, j, k) => i * j * k;
const partialMultiplyBy5 = multiplya.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));
