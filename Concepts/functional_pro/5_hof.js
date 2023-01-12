//higher order function , function that returns other functions

const hof = (fn) => fn(5);
hof(function a(x) {
    return x
})

const test = () => () => 10;
console.log(test()());
//closure

const closure = function () {
    let count = 0;
    return function increment() {
        count++
        return count;
    }
}

const incrementFn = closure();
incrementFn();//output 1
incrementFn();//output2
console.log(incrementFn());
