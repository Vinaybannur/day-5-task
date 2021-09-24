//  anonymous function
 let words = ["vinay","nitin","avinash","gadag"];

const checkPalindrom = function (str) {
    return str == str.split('').reverse().join('');
}

const result = words.filter(word => checkPalindrom(word));
console.log(result);


// IIFE function
(function(){
    const checkPalindrom = function (str) {
        return str == str.split('').reverse().join('');
    }
    
    const result = words.filter(word => checkPalindrom(word));
    console.log(result);
 })(words);


//arrow function

const checkPalindrom =  (str) => {
    return str == str.split('').reverse().join('');
}

const result = words.filter(word => checkPalindrom(word));
console.log(result);