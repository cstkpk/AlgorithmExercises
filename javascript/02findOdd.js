// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

const test = {};

const arr = [1, 1, 1, 4, 4, 1, -1];

test.findOdd = function(arr) {
    arr.sort();
    let num = arr[0];
    let odd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== num) {
            num = arr[i]
        }
        let newArr = arr.filter(elem => elem === num);
        if (newArr.length % 2) {
            odd = newArr[0];
        }
    }
    return odd;
}

test.findOdd(arr);

module.exports = test;