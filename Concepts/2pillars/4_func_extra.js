//function on loop must be defined outside so it gets single time inilized thereby saving memory

var count = function(){ //function definaiton and initlization.
    var a = 0;
    a++;
    console.log(a);
}

for (i= 0; i<4;i++ ){
    count();
}

//Function with default parament is goood to remove erros 

function a(daudi){
    return daudi
}
a()