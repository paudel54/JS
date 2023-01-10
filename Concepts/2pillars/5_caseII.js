//use of function with parameter reduced code for multiple users. 
//but more powers can be added with higher order functions.

const giveAccessTo = (name)=> 'Access Granted to'+name

function userLogin(user){
    let array = [];
    for(i = 0 ; i<40000;i++){
        array.push(i);
    }
    console.log(giveAccessTo(user));
}

function letAdminLogin(admin){
    let array = [];
    for(i = 0 ; i<40000000;i++){ //on different time setup sceniro
        array.push(i);
    }
    console.log(giveAccessTo(admin));
}

userLogin(' hari');
letAdminLogin(' sita');


