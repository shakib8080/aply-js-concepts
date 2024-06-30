// factorial diclaration
/*
let factorial = 1; 
for(let i = 1; i <=10; i++){
    factorial = factorial *i ;
}
console.log(factorial);
*/

// factorial with function 

function getfactorial (number){
    let factorial = 1;
    for(let i = 1; i <= number; i++){
        factorial = factorial *i;
    }
    return factorial;
}

let firstfactorial = getfactorial(9);
console.log(firstfactorial,'first factorial');

let secoundfactorial = getfactorial(8);
console.log(secoundfactorial,'secound factorial');
