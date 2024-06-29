// function isleapyear (year){
//     if(year % 4 == 0){
//     return true;
//     }
//     else{
//      return false;
//     }

// }

// const myyear = 2033 ;
// const youryear = 2032; 
// result = isleapyear(myyear);
// console.log(result);

// result = isleapyear(youryear);
// console.log(result);


function isnotleapyear (year){
    if (year % 4 != 0){
        return true;
    }
    else{
        return false;
    }
}


let myyear = 3930 ;
let heryear = 2030 ;
myleapyear = isnotleapyear(myyear);
console.log(myleapyear);
result = isnotleapyear ( heryear);
console.log(result);