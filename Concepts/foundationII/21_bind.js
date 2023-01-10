function multiply(a,b){
    console.log(a); //first parameter a gets binded with 2 this keyword parameter
    console.log(b); //2nd parameter gets binded with function passing variable
    return a*b; 
}

let multiplyByTwo = multiply.bind(this,2);
console.log(multiplyByTwo); // multiplyByTwo is returned as a function. 

console.log(multiplyByTwo(8));