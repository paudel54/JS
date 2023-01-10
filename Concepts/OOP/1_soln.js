//Use case of factory Functions

const action = {
     attack(){
        console.log(`${this.name} has a ${this.weapon} as attacking weapon`);
    }
}

function character(name, weapon){
    return{
        name:name,
        weapon,
        
    }
}
//created object with function.
const rame = character('rame','stone');
rame.attack = action.attack;
rame.attack();
//created next object with same function i.e function reusability
const sansrit = character('Sansrit', 'Khukuri');
sansrit.attack = action.attack;
sansrit.attack();