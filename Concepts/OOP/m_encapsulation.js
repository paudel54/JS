//before the birth of OOP there used to be procedural pragamming where
//variables and function used to be seperate units and function contained a lot 
//of parameters

//example of procedural programming language

let baseSalary = 30000;
let overTime = 10;
let rate = 20;

function getWage(baseSalary, overTime, rate) {
    return baseSalary + (overTime * rate);
}

//AND THERE CAME EXISTANCE OF OOP ENCAPSULATION WHARE VAR AND FUNC WERE COPULED INTO SINGLE ENTITY 
//THIS SHARPLY REDUCED THE USED OF PARAMETER INTO THE FUNCITON. 

let employee = {
    baseSalary: 30000,
    overTime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overTime * this.rate);
    }
}
//return doesn't log the info, it's not debugging tool, instead write console.log into the calling function. 
console.log(employee.getWage());
console.log('html is linked');