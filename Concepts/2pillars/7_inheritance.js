let dragon = {
    name: 'Kale',
    fire: true,
    fight(){
        console.log("level 5")
    },

    sing(){
        if(this.fire){
            console.log(`I am  ${this.name}, the breather of fire`);
        }  
    },
}

dragon.sing();

let lizard = {
    name: 'Pipalu',
    fight(){
        console.log('level 3')
    },
}
//binded sing function to other object properties
//application of inheritance
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

//inorder to inherit all function we use __proto__ method

lizard.__proto__ = dragon;
lizard.sing();
console.log(lizard.fire)
lizard.fight();

console.log(dragon.isPrototypeOf(lizard));
console.log(lizard.isPrototypeOf(dragon));