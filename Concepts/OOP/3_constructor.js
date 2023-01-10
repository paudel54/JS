//constructor function

function Action(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
//constructor function name can be linkedup with prototype object to add additional function
Action.prototype.attack = function(){
    console.log(`${this.name} attack a deer with ${this.weapon}`);
}

//use of this keyword to pass value in function inside funtion. 
Action.prototype.build = function(){
    const self = this;
    function building(){
        return console.log(`${self.name} is building a bonglow`);
    }
    return building();
}

Action.prototype.paint = function(){
    function building(){
        return console.log(`${this.name} is painting a bonglow`);
    }
    return building.bind(this);
}
//new keyword help to auto return fuction and auto assign the value to particular called object.
const ram = new Action('ram','guleli');
ram.attack();
ram.build();
//use of bind method to pass value with this keyword
ram.paint()();