// Write a function that accepts an array of 10 integers (between 0 and 9) 
// that returns a string of those numbers in the form of a phone number.

// E.g. createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

let test = {};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

test.createPhoneNumber = function(arr) {
    arr.unshift("(");
    arr.splice(4, 0, ")");
    arr.splice(5, 0, " ");
    arr.splice(9, 0, "-");
    const str = arr.toString().replace(/,/g, "");
    return str;
};

test.createPhoneNumber(arr);

module.exports = test;