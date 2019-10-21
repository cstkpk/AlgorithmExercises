// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.

const num = 1202;

// const expandedForm = num => {
//     let numStr = num.toString();
//     let num1 = 0;
//     let zeroStr = "0";
//     let fullStr = "";
//     for (let i = 0; i < numStr.length; i++) {
//         if (numStr[i] !== "0") {
//             zeroStrN = zeroStr.repeat(numStr.length - i - 1);
//             num1 = `${numStr[i]}${zeroStrN}`;
//             fullStr = fullStr.concat(`${num1} + `);
//         }
//     }
//     fullStr = fullStr.replace(/\s\+ $/, "");
//     console.log(fullStr);
//     return fullStr;
// };

// OR

const expandedForm = num => {
    let numStr = num.toString();
    let fullStr = "";
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== "0") {
            let zeroStr = "0".repeat(numStr.length - i - 1);
            let num1 = `${numStr[i]}${zeroStr}`;
            fullStr = fullStr.concat(`${num1} + `);
        }
    }
    fullStr = fullStr.replace(/\s\+ $/, "");
    console.log(fullStr);
    return fullStr;
};

// Cool solution:
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

expandedForm(num);