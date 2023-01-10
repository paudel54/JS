//created a name object

let name = {
    firstName: "Kim Jong ",
    lastName: "Un",
}

//function declaration for reusibility 

let printFullName = function (hometown, state) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state)
}

//application of call: borrowing method/function from object
printFullName.call(name, "pyong-yang", 'DPRK');


//created a name2 object

let name2 = {
    firstName: "wanki ",
    lastName: "moon ",
}

//bind and call are same, apply passes argument onto list where call passses parameter serial

printFullName.apply(name2, ["seol", "south korea"]);



//bind method is used to  call a function later on with certain context

let printMyName = printFullName.bind(name2, 'seol-1 ', " southern korean penensula ");
console.log(printMyName);
printMyName();
