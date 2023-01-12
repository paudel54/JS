//Pure Functions
// No side effects immutable and output is constant for constant input


const array = [1, 2, 3]

function removeLastItem(arr) {
    //arrays are object and passed by ref. so, we created new array with concat prop so we can copy value not ref, solving probelm with effects
    //we are not effecting the outside world
    const newArray = [].concat(arr);
    newArray.pop()
    return newArray;
}

function multiplyBy2(arr) {
    return arr.map(item => item * 2);
}

//referential transparancy for same input same output
function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(5, 10));



const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);
