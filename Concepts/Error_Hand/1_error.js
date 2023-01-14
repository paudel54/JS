//TRY catch block for handling error
//try { } catch { }

function fail() {
    //if we make any error inside try block, catch block gets active and executes accordingly
    try {
        //whenever i made lets say syntax error in console.log with diff spelling catcch block executes and throws error
        consoe.log('this works')
    }

    catch (err) {
        console.log('We have made an error! please check')
    }
}

console.log(fail());