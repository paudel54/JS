// const muliplyBy = function(num1){
//     console.log(num1);
//     return function(num2){
//         console.log(num2);
//         console.log(num1*num2);
        
//     }
// }

//reducting function into less  by arrow function
const muliplyBy = (num1)=> (num2)=> console.log(num1*num2);
        
    



// const multiply4 = muliplyBy(4);
// multiply4(6);

muliplyBy(8)(5)