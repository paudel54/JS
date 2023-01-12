//IDEMPOTENCE: output is pridictiable and sure
//the output is ever changing dynamic 

function random(num) {
    // return Math.random(num)
    console.log(num);
    //converted to idempotence
}
console.log('Printing')
console.log(random(6));