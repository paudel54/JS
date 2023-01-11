function character(name, weapon) {
    return {
        name: name,
        weapon: weapon,
        attack() {
            return 'attack with ' + weapon
        }
    }
}

const peter = character('peter', 'stone')
peter.attack();

console.log('hello')