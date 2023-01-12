//OOP CONSTRUCTOR FUNCTIONS
//constructors are conventionally named with initial CAPITAL
function Circle(radius) {
    console.log('this', this)
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
//if we dont' add new to the called constructor function this points to window/global
//adding new to constructor function will helps to point on current object.
//const another = Circle(1);   GLOBAL

const another = new Circle(1); //[points ro current constructor obj Circle]


//USE OF NEW KEYWORD FUNCTION
//1ST CREATES EMPTY OBJECT , 2ND POINTS TO OBJECT 3RD AUTO RETURNS VALUE TO PARENT, SO WE DONT USE RETURN KEYWORD ON IT