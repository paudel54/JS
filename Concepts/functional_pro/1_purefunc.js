//noside effects
//input --> output


const array = [1, 2, 3]
//this function showed side effect it modified outside element or mutated global object
function a(arr) {
    arr.pop()
}
function mutate(arr) {
    arr.forEach(item => {
        arr.push(1)
    })
}

a(array);
console.log(array);
mutate(array);
console.log(array);

