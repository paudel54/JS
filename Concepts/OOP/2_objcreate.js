//Use case of factory Functions

const action = {
    attack(){
       console.log(`${this.name} has a ${this.weapon} as attacking weapon`);
   }
}

function character(name, weapon){
   //concept of prototypical inheritance
       let chain = Object.create(action);
       console.log(chain.__proto__);
       chain.name=name;
       chain.weapon = weapon;
       return chain;
}
//created object with function.
const rame = character('rame','stone');
rame.attack();
//created next object with same function i.e function reusability
const sansrit = character('Sansrit', 'Khukuri');
sansrit.attack();