//noside effects
//given same input --> must have same  output


const array = [1, 2, 3]
//this function showed side effect it modified outside element or mutated global object
function a(arr) {
    arr.pop()
    //no return statement onto function so, it can show undefined to console a(array);
    //it also shows side effect, i.e given array in global scope is changed. 
}
function mutate(arr) {
    arr.forEach(item => {
        arr.push(1)
    })
}


console.log(a(array));
console.log(array);
mutate(array);
console.log(array);

//how to write function preventing this side effects?