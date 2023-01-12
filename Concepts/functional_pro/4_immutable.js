//immutability not changing state, data
//instead making copy and returing new state everytime
const obj = {
    name: 'Sansrit'
}

//pure function : immutable
function clone(obj) {
    return { ...obj };
}

function updateName(obj) {
    //making copy to mutate , keeping original obj immutable
    const obj2 = clone(obj);
    //mutating data in our program
    obj2.name = 'Aayukta'
    return obj2
}

const updatedObj = updateName(obj)
console.log(obj, updatedObj)