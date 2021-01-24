// In this example you have to validate if a user input string is alphanumeric. 
// The given string is not nil, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces/underscore

const string = "Mazinkaiser0978"

// const alphanumeric = string => {
//     if (/\w/.test(string) && /\_/.test(string) === false && /\s/.test(string) === false && /\!/.test(string) === false) {
//         return true;
//     }
//     else return false;
// }

const alphanumeric = string => /^[a-zA-Z0-9]+$/.test(string) ? true : false;

console.log(alphanumeric(string));