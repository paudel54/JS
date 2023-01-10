//Due two 3 majour functaionaliy, Function is said to be first class citizen in JS

//1. Function can be assigned to variables. func expression.

var speed = function(){console.log('you speed is very high')};
speed();

//2.Function can be passed as function parameter

function slow(fc){
    fc() //calling function that have been passed from the console.
}
slow(function(){console.log(
    'slow function'
)});

//Return function as value
function b(){
    return function(){console.log('Hello beautiful')}
}
b();
b()();