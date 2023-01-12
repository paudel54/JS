function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}

const circle = new Circle(10);

//enum: use of key and in keyword in for loop in calculating keys used in an object
//use of [] helps in calculating the value of particular key
for (let key in circle) {
    console.log(key, circle[key]);
}

if ('radius' in circle) {
    console.log('Circle has a radius');
}