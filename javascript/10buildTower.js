// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below:
// [
//     '  *  ', 
//     ' *** ', 
//     '*****'
// ]

// and a tower of 6 floors looks like below
// [
//     '     *     ', 
//     '    ***    ', 
//     '   *****   ', 
//     '  *******  ', 
//     ' ********* ', 
//     '***********'
// ]

const nFloors = 3;

const towerBuilder = nFloors => {
    let starArr = [];
    let counter = 1;
    for (let i = 1; i <= nFloors; i++) {
        starArr.push(`${" ".repeat(i - 1)}${"*".repeat(nFloors * 2 - counter)}${" ".repeat(i - 1)}`);
        counter += 2
    };
    starArr.reverse();
    return starArr;
};

// Cool solution:
const towerBuilder = n => [...Array(n)].map((_, i) => ' '.repeat(n-i-1) + '*'.repeat(i*2+1) + ' '.repeat(n-i-1)) 

console.log(towerBuilder);
