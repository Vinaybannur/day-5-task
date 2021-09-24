//anonymous function

let names = ['vinay','avinash','vinay','tommy'];

// let uniqueChars = [...new Set(names)];

// console.log(uniqueChars);


const newArray = function(unique){
    unique = [...new Set(names)];
    console.log(unique);
}
newArray(names);


//IIFE function

(function(unique){
    unique = [...new Set(names)]; // ...new Set()---> removes duplicates elements
    console.log(unique);
})(names);