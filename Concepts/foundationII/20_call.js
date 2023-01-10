//author-Sansrit wednesday 19 jan 2021

/*function a(){
    console.log('hi');
}
a.call();
*/

//call() and apply works on similar way call takes paramer with (1,2,3) while apply takes on array [1,2,3]
const wizard = {
    name: 'urina Lama',
    health: 40,
    // heal(){
    //     return this.health = 100;
    // }
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}
console.log(wizard)
//console.log(wizard.heal())

const god = {
    name: 'visnu',
    health: 20
}

console.log('before healing ',god)
//console.log(wizard.heal.call(god))
console.log(wizard.heal.call(god,10,20));
console.log(wizard.heal.apply(god,[20,20]));
//apply works on array
console.log('after borrowing ', god)