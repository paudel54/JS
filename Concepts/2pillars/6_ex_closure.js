function paudel(nam){
    return function(thar){
        return function(ghar){
            console.log(`${nam} ${thar} ${ghar}`);
        }
    }

}

paudel('Sansrit')('paudel')('Barabise');