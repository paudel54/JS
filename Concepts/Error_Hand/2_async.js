
Promise.resolve('Asyncfail')
    .then(response => {
        //whenever it sees error it executes the catch block skipping every others block
        throw new Error('#1 fail')
        console.log(response)
        return response
    })

    .then(response => {
        console.log(response)
    })
    //.catch method helps in catching the async error thrown
    .catch(err => {
        console.log(err)
    })

//JS FUNDAMENTALS CONECPT COMPLETED: NOW INTO DATA STRUCTURE AND ALGORITHMS AND  INTO VANILLA JS PROJECT BASED SOFT DEV