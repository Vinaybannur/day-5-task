// anonymous function
const titleCase = function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  console.log("anonymousFunction:",titleCase("vinay bAnnur"));


// IIFE function
  (function(str){
       str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
      console.log ("ITFE:",str.join(' '));
      
         
})("vInaY bAnnur");

//arrow function

const titleCase =  (str) =>{
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
console.log("arrowFunction:",titleCase("vinay bAnnur"));
