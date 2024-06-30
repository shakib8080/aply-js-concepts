// function getfactorial(number){
//     let factorial =1 ;
//     let i = 1; 
// //     while(i<=number){
// //         factorial= factorial*i;
// //         i++;
// //     }
// //     return factorial;
// // }

// // const mynumber = 10;
// // const yournumber = 9;
// // firstfactorial = getfactorial(mynumber);
// // console.log(firstfactorial);
// // secoundfactorial = getfactorial(yournumber);
// // console.log(secoundfactorial);

// function getfactorial (number){
//     let factorial = 1 ; 
//     let i = 1; 
//     while (i <=number){
//         factorial = factorial*i ;
//         i++;
//     }
//     return factorial;
// }

// first = getfactorial (9);
// console.log(first);

function getfactorial (number){
    let factorial = 1;
    for(let i = 1; i <=number; i++){
        factorial = factorial*i;
    }
    return factorial;
}
number = getfactorial ( 10);
console.log(number);