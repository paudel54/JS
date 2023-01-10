function heavyDuty(index){
    const bigArray = new Array(6000).fill('Kto')
    //console.log(bigArray);
    return bigArray[index];
}

heavyDuty(400);

const makeNuclearButton = ()=>{
    let timeWithoutDestruction = 0;
    const passTime =()=> timeWithoutDestruction++;
    const totalPeaceTime = ()=> timeWithoutDestruction;

    const lunch =()=>{
        timeWithoutDestruction = -1;
        return '*****';
    }
    setInterval(passTime, 1000)
    return{
        totalPeaceTime: totalPeaceTime,
        lunch: lunch
    }
}
    const ohno = makeNuclearButton();
    ohno.passTime();
