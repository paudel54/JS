//partial applicaiton

const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5)
console.log(partialMultiplyBy5(2, 3));
// added hi
