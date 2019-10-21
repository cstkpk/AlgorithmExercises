// 4 kyu
// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071

// If no bigger number can be composed using those digits, return -1:

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1

// 231 (312) --> 213 --> 
// 4520 --> 4502
// 5024

const num = 37571;

// This function gives you the largest possible number
// const nextBigger = num => {
//     let newNum = num.toString().split("").sort().reverse().join().replace(/,/g, "");
//     newNum = parseInt(newNum);

//     if (newNum === num) {
//         console.log(-1);
//     } else {
//         console.log(newNum);
//     }
// };

const nextBigger = num => {
    let newNum = num.toString();
    let flag = false;
    let numSmall = 0;
    let numBig = 0;
    let indexNumSmall = 0;
    let indexNumBig = 0;

    for (let i = newNum.length - 1; i > -1; i--) {
        if (flag === false) {
            if (newNum[i] < newNum[i+1]) {
                flag = true;
                numSmall = newNum[i];
                // Mark location of numSmall
                indexNumSmall = i;
            }
        }
    };

    if (flag) {
        nextStep();
        return newNum;
    } else {
        return -1;
    };

    // Any digit beyond location of numSmall
    // sort() and then choose the smallest number to assign to numBig
    function nextStep() {
        let sectionNum = [];
        for (let i = newNum.length - 1; i > indexNumSmall; i--) {
            sectionNum.push(newNum[i]);
        };
        sectionNum = sectionNum.sort();

        // Finding the next smallest number (to the right of the smallest)
        let flag2 = false
        for (let i = 0; i < sectionNum.length; i++) {
            if (flag2 === false) {
                if (sectionNum[i] > numSmall) {
                    numBig = sectionNum[i];
                    flag2 = true;
                }
            }
        };

        // Finding index of numBig
        let testNum = newNum.substring(indexNumSmall);
        indexNumBig = testNum.indexOf(numBig) + indexNumSmall;
        // Swap positions of numSmall and numBig
        newNum = newNum.substring(0, indexNumSmall) + numBig + newNum.substring(indexNumSmall + 1, indexNumBig) + numSmall + newNum.substring(indexNumBig + 1);
        // Reorder all numbers after new position of numBig
        let reorder = newNum.substring(indexNumSmall + 1);
        reorder = reorder.split("").sort().join("");
        // Attach front end of newNum (from beginning to numBig) to end of reorder
        newNum = newNum.substring(0, indexNumSmall + 1) + reorder;
        // Turn newNum back into an integer
        newNum = parseInt(newNum);
    };
};

console.log(nextBigger(num));