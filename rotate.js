//anonymous function 
let arr1 = [2, 4, 6, 8];
const rotateRight= function (arr){
    let last = arr.pop();// pop() ---> removes last element
    arr.unshift(last);// unshift() --> adds one or more elements
    console.log (arr);
}
rotateRight(arr1);

//IIFE function
 (function(arr){
    let last = arr.pop();// pop() ---> removes last element
    arr.unshift(last);// unshift() --> adds one or more elements
    console.log (arr);
 })(arr1);

