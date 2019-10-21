// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. 
// The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

// (Use the English alphabet with 26 letters!)

const arr = ["a", "b", "c", "d", "f"];

const findMissingLetter = arr => {
    let present = [];
    let missingLetter = "";
    arr.forEach(letter => present.push(letter.charCodeAt()));
    for (let i = 0; i < present.length; i++) {
        if (present[i] - present[i-1] !== 1 && present[i] !== present[0]) {
            let missing = present[i] - 1;
            missingLetter = String.fromCharCode(missing);
        }
    }
    console.log(missingLetter);
};

findMissingLetter(arr);

// For testing:
const test = {};
test.findMissingLetter = function(arr) {
    let present = [];
    let missingLetter = "";
    arr.forEach(letter => {
        present.push(letter.charCodeAt());
    });
    for (let i = 0; i < present.length; i++) {
        if (present[i] - present[i-1] !== 1 && present[i] !== present[0]) {
            let missing = present[i] - 1;
            missingLetter = String.fromCharCode(missing);
        }
    }
    return missingLetter; 
};

module.exports = test;