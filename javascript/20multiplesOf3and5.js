// Project Euler: Problem 1: Multiples of 3 and 5 (freecodecamp)
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

function multiplesOf3and5(number) {
    let sumArr = [];
    let three = Math.floor(number / 3);
    let five = Math.floor(number / 5);
    let prevNum1 = 0;
    let prevNum2 = 0;
    for (let i = 0; i < three; i++) {
        prevNum1 += 3;
        if (prevNum1 < number) {
            sumArr.push(prevNum1);
        }
    };
    for (let i = 0; i < five; i++) {
        prevNum2 += 5;
        if (!sumArr.includes(prevNum2) && prevNum2 < number) {
            sumArr.push(prevNum2);
        }
    };
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sum = sumArr.reduce(reducer);
    return sum;
};
  
console.log(multiplesOf3and5(1000));