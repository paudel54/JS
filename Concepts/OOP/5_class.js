class war {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        console.log(`${this.name} killed with ${this.weapon}`);
    }
}
//here object rame is an instanace of class war. 
// we called it instance when we create class and assignt to partiuclar object
const rame = new war('Ram krishna', 'rifel');
const kriti = new war('kriti', 'AK47');
console.log(rame.attack());
console.log(kriti.attack());


//onto razor