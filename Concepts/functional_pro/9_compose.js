//compose and pipes
//compose right to left execution while
//pipe works from left to right


// to make number positive and multiply by 3

const compose = (f, g) => (data) => f(g(data))

const makePositive = (num) => Math.abs(num);
const multiply3 = (num) => num * 3;

const mulandAbs = compose(multiply3, makePositive);

console.log(mulandAbs(-30));