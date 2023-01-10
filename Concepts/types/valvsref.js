//pass by value is just copying value to next variable
//primitive data types works with pass by value

var b = 6;
var c = b;
//value of b is exactly got copied to c with new memory allocation
c++;
console.log(b);
console.log(c);

//non-primitive data type like object  and gets pass by referece.

let obj1 = {name:'ram', school: 'ppss'};
let obj2 = obj1;
//here obj1 is not copied to obj2 but obj2 pointing to obj1 properties elements and memories
obj1.school = 'ketu';
console.log(obj1);
console.log(obj2);
//both value got changed on changing obj1 elements example of pass by ref.


//inorder to copy the objects and array we need to clone elements for array
var num = [1,2,3];
var space = [].concat(num); //use of concat object properties
space.push(9);
console.log(num);
console.log(space);

//inCase of object we use Object.assign() and {...obj} methods

let alpha = {a:'a', b:'b', c:'c'};
let beta = {...alpha}; //handy to clone object
let gamma = Object.assign({},alpha); //this is next method.
alpha.c = 'changed c';
console.log(alpha);
console.log(beta);
//cloned objects succesfully.
