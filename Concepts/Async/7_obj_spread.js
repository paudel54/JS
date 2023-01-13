//object spread operator in ES9, 2018

const array = [1, 2, 3, 4, 5];

function sum(a, b, c, d, e) {
    return a + b + c + d + e
}

//we dont need to pass single parameters into sum function use of spread operator
console.log(sum(...array));

//example 2

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2
}

const { tiger, ...rest } = animals;

console.log(tiger);
console.log(rest);


