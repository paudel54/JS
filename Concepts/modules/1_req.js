//user object is on global name space, they are tighlty copuled. it can also leads to memory leaks
user = {}

//lets say we have multiple function 
//and there are variable inside function

//the variable inside funciton is only limited to it's scope but we need a way to let those varible communicate with different function
//this can be acheive by passing object inside funciotn and manipulating it.

function signin(user) {
    var textfield = 'haha'
}

function isHuman(user) {
    //...
}

//here passing object user into function can be handy in populating empty object user. 