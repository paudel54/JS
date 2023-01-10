//a function expression can't be hoisted.
//play(); error play is not function.
var play = function () {
    console.log('I can play football');
}

//function declartion can be hoisted.

run();
function run() {
    console.log('I can run, run can be hoisted');
}


//CASE-I variable are not hoisted. 
console.log(one);
var one = 4;
var one = 6;

//variables  partially hosisted but its not useful
function dance() {
    var lok;
    console.log(lok + " is native dance");
    lok = 'tamang selo';

}
dance();
//output undefined is native dance declaration hoisted to to but not defined


//global variables. 
function myCourse() {
    //undefined keyword such as , with no var, let , const are global variables function must be called before used. 
    courseName = "ram";
}

myCourse();
console.log(courseName + ' is a good boy');


var favFood = 'kiwi';

var foodThought = function () {
    console.log('food thought ' + favFood);

    var favFood = 'grapes';
    console.log('new fav fruit ' + favFood);
}

foodThought();