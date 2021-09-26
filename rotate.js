//anonymous function 
let arr1 = [2, 4, 6, 8];
const rotateRight= function (arr){
    for(let i=1;i<arr.length;i++){
    let last = arr.pop();// pop() ---> removes last element
    arr.unshift(last);// unshift() --> adds one or more elements
    console.log (arr);
    }
}
rotateRight(arr1);

//IIFE function
 (function(arr){
     for(let i=1;i<arr.length;i++){
    let last = arr.pop();// pop() ---> removes last element
    arr.unshift(last);// unshift() --> adds one or more elements
    console.log (arr);
     }
 })(arr1);

