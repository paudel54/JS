// function() < function(a,b) < Higher order func

function sureshLogin(){
    let array = []
    for(i = 0; i< 5000000; i++){
        array.push(i);
    }
    console.log('Access Granted to Suresh')
  
}
sureshLogin();

//if we want to give login access to another user we need to recopy code with function hence requirement of function
//with parameter got exist.
function sansritLogin(){
    let array = []
    for(i = 0; i< 500000; i++){
        array.push(i);
    }
    console.log('Access Granted to Sansrit')
  
}
sansritLogin();