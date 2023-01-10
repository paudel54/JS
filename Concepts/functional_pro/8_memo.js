//caching 

function addTo80(n) {
    return n + 80;
}



function memoizedAdd() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log('Wait for some more time');
            cache[n] = n + 80;
            return cache[n];
        }
    }

}
const memo = memoizedAdd();

console.log('1', memo(10));
console.log('2', memo(10));