const giveAccessTo = (name)=> 'Access Granted to'+name

function authenticate(verify){
    let array = [];
    for(i = 0 ; i<verify;i++){
        array.push(i);
    }
 console.log('yeta ni aai puge la')
}

// function sing(person){
// console.log('lala '+ person.name)
// }

function letPerson(person, fn){
    if(person.level === 'admin'){
        fn(5000000)
    } else if (person.level === 'user' ){
        fn(100000)
    }
    console.log(giveAccessTo(person.name) )
}
letPerson({level: 'user', name: ' sansrit'},authenticate);  //implemention of generic function
// letPerson({level: 'user', name: ' Ram'},sing);
