function Circle(radius) {
    //local variable inside function, not an object to be object had to be defined as this.color
    let color = 'red';
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimumLocation = function (factor) {
        ///
    }

    this.draw = function () {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circle = new Circle(10);
console.log(circle.draw());

console.log(circle);

console.log('*****************abstraction**************************');
//if we want to hide the complex functionality let's say defaultLocation and computeOptimumLocation
//we need to change this keyword , removing this and replacing it with let keyword making like a local variable. 


function Circle1(radius) {
    //local variable inside function, not an object to be object had to be defined as this.color
    this.radius = radius;
    //we want to hide below functionality form public/client scope
    let defaultLocation = { x: 0, y: 0 };
    let computeOptimumLocation = function (factor) {
        ///default location
        //this.radius can be used here
    }

    this.draw = function () {
        this.computeOptimumLocation(0.1);
        console.log('draw');
    }
}

const circlenew = new Circle1(10);
//only draw and radius can be accessable implemention of abstraction and closure
console.log(circlenew);