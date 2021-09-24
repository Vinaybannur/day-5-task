//anonymous function
let array=[10,20,20,30];
let count =0;
let count1=0;

const sum = function(){
    for(let i=0;i<array.length;i++){
        count +=array[i];
    }
    console.log("anonymous:",count) ;
}
sum(array);

// IIFE function
(function(){
       for( let i=0;i<array.length;i++){
        count1 +=array[i];
        }
        console.log("IIFE:",count1) ;
    })();