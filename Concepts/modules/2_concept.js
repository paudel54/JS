//global Scope
//module Scope
//Function Scope
//Block Scope


//iife
//immediately invoked funciton expression
// (function () {
//     var harry = 'potter'
//     var volde = ' He who must not be named'

//     function fight(char1, char2) {
//         var attack1 = Math.floor(Math.random() * char1.length)
//         var attack2 = Math.floor(Math.random() * char2.lenghth)
//         return attack1 > attack2 ? '${char1} wins `:` `${char2} wins'
//     }

// })()

//iffe had problem with global var or module interfenrece so new approach was introduced

// COMMONJS and AMD, async module

//require keyword
var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

//export keyword
module1.exports = {
    fight: fight
}