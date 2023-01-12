//creating object:

const circle = {
    //property 1
    radius: 1,
    //property 2 , property holds value
    location: {
        x: 1,
        y: 1
    },
    //draw is a method: Methods hold logic
    draw: function () {
        console.log('draw')
    }
};

//circle.draw();

//FACTORIES FUNCTION: LETS SAY WE WANT ANOTHER CIRCLE, SO WE HAVE TO DUBLICATE THE CODE.
//DUBLICATING CREATES HUGE MESS WHEN WE HAVE LARGE NUMBER OF METHODS INSIDE PARENT OBJECT. DEBUGGIG IS MORE HECTIC
//FACTORY FUNCTION HELPS TO RESOLVE THIS

function createCircle(radius) {
    return {
        radius: radius,
        draw: function () {
            console.log('draw with radius' + this.radius);
        }
    };
}

const circle1 = createCircle(3);
const circle2 = createCircle(5);
console.log(circle1);
console.log(circle2);