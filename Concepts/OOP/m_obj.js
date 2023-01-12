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

circle.draw();