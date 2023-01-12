//PRIMITIVES: NUMBERS, STRING, BOOLEAN SYMBOL UNDEFINED NULL
//REFERENCE TYPE: OBJECT FUNCTION ARRAY
//! PRIMITEIVES ARE COPIED BY THEIR VALUE
//! OBJECTS ARE COPIED BY REFERENCE

console.log('primites vs References')

//with primitives
let x = 10;
let y = x;

x = 50;
//output x and y? 

console.log(y);
console.log(x);
console.log("******************************************************");

//On different scenerios teating same as object:


let a = { value: 10 };
//as soon as we decleare object the the variable are stored on certain memory and only address is passed and stored on let a. 
//here the memeory location of object is share amoung a , b and a.value override the value stored on memory address 
let b = a;

a.value = 50;

console.log(a);

console.log(b);
console.log(a.value);