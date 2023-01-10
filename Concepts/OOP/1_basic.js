//creating basic object with method along with the objectstates.

const character = {
    name: 'Hari',
    weapon: 'Khukuri',
    attack(){
        console.log(`  ${this.name} attacked with ${this.weapon}`);
        return `attack with ${this.weapon}`;
       
    }
}
character.attack();


//if i need next charcater object copying resolves the issue but its consumes memory
const character1 = {
    name: 'rita',
    weapon: 'stone',
    attack(){
        console.log(`${this.name} attacks with ${this.weapon}`);
    }
}

character1.attack();