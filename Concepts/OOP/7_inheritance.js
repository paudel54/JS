class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }

    attack() {
        return 'attack with ' + this.weapon;
    }
}

class Elf extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        this.type = type;
    }
}

class Orge extends Character {
    constructor(name, weapon, color) {
        super(name, weapon);
        this.color = color;
    }
    makefort() {
        return ' Worlds strongest fort';
    }
}

const dolby = new Elf('Dolby', 'Khukuri', 'house');
console.log(dolby);
console.log(dolby.attack())

const shrek = new Orge('Shrek', 'Rifle', 'green');
console.log(shrek);
console.log(shrek.makefort())
// colsole.log(shrek.makefort());

console.log(dolby instanceof Elf);
console.log(dolby instanceof Orge);
console.log(dolby instanceof Character);
