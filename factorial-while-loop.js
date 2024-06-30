function getfactorial(number){
    let factorial =1 ;
    let i = 1; 
    while(i<=number){
        factorial= factorial*i;
        i++;
    }
    return factorial;
}

const mynumber = 10;
const yournumber = 9;
firstfactorial = getfactorial(mynumber);
console.log(firstfactorial);
secoundfactorial = getfactorial(yournumber);
console.log(secoundfactorial);

