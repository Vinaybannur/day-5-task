// anonymous function
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

let  isPrime = function(num) {
  for (let i = 2; num > i; i++) {
    
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("annonymous:",array.filter(isPrime));

// IIFE function

(function(num){
  let  isPrime = function(num) {
    for (let i = 2; num > i; i++) {
      
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log("IIFE:",array.filter(isPrime))
         
})(array);

//arrow function
let  isPrime1 = (num)=> {
  for (let i = 2; num > i; i++) {
    
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("arrow:",array.filter(isPrime1));