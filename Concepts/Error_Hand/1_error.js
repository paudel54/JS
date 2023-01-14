//TRY catch block for handling error
//try { } catch { }

function fail() {
    //if we make any error inside try block, catch block gets active and executes accordingly
    try {
        //whenever i made lets say syntax error in console.log with diff spelling catcch block executes and throws error
        console.log('this works')
        throw new Error('Oppsie!!!!')
    }

    catch (error) {
        console.log('We have made an error! please check', error)
        console.log(error.message)
    }
}

console.log(fail());