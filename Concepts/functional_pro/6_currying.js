//currying 
const multiply = (a, b) => a * b;
var check = multiply(4, 2);
console.log('multipication is :', check);

//application of currying to use parameter one by one 
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy5 = curriedMultiply(5);
var store = curriedMultiplyBy5(3);
console.log(store);
console.log(curriedMultiplyBy5(10));