//VAR
//1.WE CAN DECLARE SAME VAR NAME AND ALSO  WE CAN REASSINGN THE VALUE
//LET
//2.IF WE DECLARE VAR WITH LET, THEN WE CANNOT DECLARE IT ANGAIN WITH SAME NAME, BUT CAN REASSIGN VALUE.
//CONST
//3. IF WE DECLARE VARIABLE WITH CONST, THEN WE CAN NEITHER DECLARE IT AGAIN NOR REASSIGN ITS VALUE.


//  Declaring  var myname = 'kim'
// Assigning       myname = 'jong un'

//example var

var myname = "Paudel 54";
//redeclaring and re assigning is possible with var //test with html console, window.myname it gets displayed
var myname = "kim 64";
//output would be kim 64


//example let
let lname = "Paudel 54";   //test with html console, window.lname can't be found becasue its not attaached to global or window object
//redeclaring is not possible with var 
//let myname = "kim 64";
//output would be error 'myname already declared'

//re assigning is possible
lname = 'kim let';

//example const;
const permanent = 'const cannot be redclare and reassigned';


//demo var function scope, let and const block scope
//on global, var declaration var are attached to window obj let and cons't aren't
//var were used in old days before e56 nowadays its barely used.

function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    //    console.log(i); this provides error because i can't be accssed outside {} block but var can be
}
//generates output 0-4; let are block scope



function startvar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('************************************************************************');
    console.log(i); //it gets access to function scope i.e everything defined with var inside startvar() func is accessibale everywhere. so it generated output of 5 although loop can only generates upto 4
}


console.log(myname);
console.log(lname);
start();
console.log('**************************************************************')
startvar();