// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.

// EXAMPLES:
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const arr = [3, 5, 1, 9, 2, 11];

const findOutlier = arr => {
    let even = [];
    let odd = [];
    arr.forEach(elem => {
        if (elem % 2) odd.push(elem); 
        else even.push(elem);
    })
    if (even.length === 1) return even[0];
    else return odd[0];
}

// OR

const findOutlier = arr => {
    let even = arr.filter(elem => elem % 2 === 0);
    let odd = arr.filter(elem => elem % 2 === 1);
    return even.length === 1 ? even[0] : odd[0];
}

findOutlier(arr);