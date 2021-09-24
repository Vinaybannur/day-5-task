 //anonymous function
 let arr=[1,2,6,5,3,9,10];
 let result=[];
 let result1=[];
 let oddNum = function(){
     for( let i=0;i<arr.length;i++){
       if ( arr[i]% 2 !==0){
             result.push(arr[i]);
            
        
        }
     }
 }
 oddNum(arr);
 console.log("anonymousFunction",result);



 //IIFE function
 (function(){
     for( let i=0;i<arr.length;i++){
        if ( arr[i]% 2 !==0){
             result1.push(arr[i]);
        }
    }
 })();
 console.log("IIFEfunction",result1);

 // arrow function

 let oddNum1 = ()=>{
    for( let i=0;i<arr.length;i++){
      if ( arr[i]% 2 !==0){
            result.push(arr[i]);
           
       
       }
    }
}
oddNum1(arr);
console.log("arrowFunction",result);
