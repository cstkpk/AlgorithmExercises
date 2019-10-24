// Beta
// Write a function letterCounter that returns the number of letters used to write all the 
// positive integers from M to N, inclusive, where M and N are integers between one and a million. 
// Do not count any punctuation or spaces. Do not use the word "and" when writing the numbers.

// For example:

// letterCounter(3,6) should return 16 because the string "threefourfivesix" has 16 letters.

// letterCounter(84,82) should return 30 because the string "eightyfoureightythreeeightytwo" has 30 letters.

// letterCounter(113,114) should return 36 because the string "onehundredthirteenonehundredfourteen" has 36 letters.

// Do not assume the input are integers. 
// Return 0 on invalid input: integers outside the range one and a million, non-integers, non-numbers.

// Inspired by Project Euler problem 17.

const letterCounter = (m, n) => {
    const ones = [
        {0: "zero"},
        {1: "one"},
        {2: "two"},
        {3: "three"},
        {4: "four"},
        {5: "five"},
        {6: "six"},
        {7: "seven"},
        {8: "eight"},
        {9: "nine"}
    ];

    let string = "";
    let difference;
    // If m is smaller than n, the difference is n - m
    if (m < n) {
        difference = n - m;
    // If m is bigger than n, the difference is m - n and swap the values of m and n
    } else {
        difference = m - n;
        let swap = m;
        m = n;
        n = swap;
    }
    console.log(difference);
    console.log(`M: ${m} N: ${n}`)

    for (let i = m; i < m + difference + 1; i++) {
        string = string.concat(ones[i][i]);
        console.log(ones[i])
    };
    console.log(string);

    const totalLetters = string.length;
    return totalLetters;

};

console.log(letterCounter(7, 10));