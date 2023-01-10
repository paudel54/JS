var a = {
    name: 'sansrit',
    say() {
        console.log(this)
    }
}
a.say()

var b = {
    name: 'ram',
    say(){
        return function(){
            console.log(this)
        }
    }
}
//console.log(b.say()()); //calls on window object. this called inside function call

var c = {
    name: 'preety',
    say(){
        return ()=>{
            console.log(this) //lexically binded  function inside function use of this pointed to current object
        }
    }
}
console.log(c.say()());