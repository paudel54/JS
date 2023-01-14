//TRY catch block for handling error
//try { } catch { }

function fail() {
    try {
        console.log('this works')
    }

    catch (err) {
        console.log('We have made an error! please check')
    }
}

console.log(fail());