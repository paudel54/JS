// new binding this keyword with objects
//ude of this within function constructor
function details(name, age) {
    this.name = name;
    this.age = age;
}

const krishna = new details('krishna', 32);
const dristhi = new details('Drishty', 23);
console.log(krishna);
console.log(dristhi);

//implicit binding

const person = {
    name: " Subrat",
    age: 22,
    hello() {
        console.log('hello' + this.name);
    }
}

console.log(person.hello());

//explict binding this refering windoow object

// const person1 = {
//     name: " Subrat",
//     age: 22,
//     hi: function () {
//         console.log('hello' + this.setTimeout)
//     }.bind(window)
// }

// console.log(person1.hi());

//Arrow Function: we can do lexical scoping
//wherever we write function it binds to



const person4 = {
    name: " Subrat",
    age: 22,
    hi: function () {
        var inner = () => {
            console.log('hi' + this.name)
        }
        return inner()
    }
}

person4.hi();