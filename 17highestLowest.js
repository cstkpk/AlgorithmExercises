// 7 kyu
// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let numArr = numbers.split(" ");
    let numArr2 = numArr.forEach(elem => parseInt(elem));
    console.log(numArr2);
    let max = numArr[0];
    let min = numArr[0];
    numArr.forEach(elem => {
        if (elem > max) {
            max = elem;
        }
        if (elem < min) {
            min = elem;
        }
    });
    return `${max} ${min}`;
}

console.log(highAndLow("5 -4 10 0"));