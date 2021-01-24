// In this kata you have to create all permutations of an input string and remove duplicates, if present. 
// This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

const str = "abba";

// const permutations = str => {
//     const results = [];

//     if (str.length === 1) {
//         results.push(str);
//         console.log(`Results 1: ${results}`);
//         return results;
//     }

//     for (let i = 0; i < str.length; i++) {
//         console.log("Outer for");
//         let firstChar = str[i];
//         console.log(`firstChar: ${firstChar}`);
//         let charsLeft = str.substring(0, i) + str.substring(i + 1);
//         console.log(`charsLeft: ${charsLeft}`);
//         let innerPermutations = permutations(charsLeft);
//         console.log(`innerPermutations: ${innerPermutations}`);
//         for (let j = 0; j < innerPermutations.length; j++) {
//             results.push(firstChar + innerPermutations[j]);
//             console.log("hello!");
//             console.log(innerPermutations.length);
//         }
//     }
//     console.log(`RESULTS!!! ${results}`);
//     return results;
// };

const permutations = str => {
    const results = [];

    if (str.length === 1) {
        results.push(str);
        return results;
    }

    for (let i = 0; i < str.length; i++) {
        let firstChar = str[i];
        let charsLeft = str.substring(0, i) + str.substring(i + 1);
        let innerPermutations = permutations(charsLeft);
        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return [...new Set(results)];
};

console.log(permutations(str));

// function getAllPermutations(string) {
//     var results = [];
  
//     if (string.length === 1) {
//       results.push(string);
//       return results;
//     }
  
//     for (var i = 0; i < string.length; i++) {
//       var firstChar = string[i];
//       var charsLeft = string.substring(0, i) + string.substring(i + 1);
//       var innerPermutations = getAllPermutations(charsLeft);
//       for (var j = 0; j < innerPermutations.length; j++) {
//         results.push(firstChar + innerPermutations[j]);
//       }
//     }
//     return results;
// }

// console.log(getAllPermutations("ab"));