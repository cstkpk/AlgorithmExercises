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
        {0: ""},
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
    const teens = [
        {0: "ten"},
        {1: "eleven"},
        {2: "twelve"},
        {3: "thirteen"},
        {4: "fourteen"},
        {5: "fifteen"},
        {6: "sixteen"},
        {7: "seventeen"},
        {8: "eighteen"},
        {9: "nineteen"}
    ];
    const tens = [
        {0: ""},
        {1: ""},
        {2: "twenty"},
        {3: "thirty"},
        {4: "forty"},
        {5: "fifty"},
        {6: "sixty"},
        {7: "seventy"},
        {8: "eighty"},
        {9: "ninety"}
    ];

    // If m or n are outside of the allowable inputs (positive integers, inclusive between 1 and 1000000) return 0
    if (m <= 0 || n <= 0 || m > 1000000 || n > 1000000 || m - Math.floor(m) !== 0 || n - Math.floor(n) !== 0 || typeof(m) !== "number" || typeof(n) !== "number") {
        return 0;
    }

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

    for (let i = m; i < m + difference + 1; i++) {
        // One digit numbers
        if (i < 10) {
            string = string.concat(ones[i][i]);
        }
        // Two digit numbers in the teens
        else if (i < 20) {
            string = string.concat(teens[i - 10][i - 10]);
        }
        // Two digit numbers larger than the teens
        else if (i < 100) {
            let substr = i.toString();
            let ten = substr.charAt(0);
            let one = substr.charAt(1);
            string = string.concat(tens[ten][ten] + ones[one][one]);
        }
        // Three digit numbers
        else if (i < 1000) {
            let substr = i.toString();
            let hundred = substr.charAt(0);
            let ten = substr.charAt(1);
            let one = substr.charAt(2);
            // If the number in the tens place is a one, use the teens object
            if (ten == 1) {
                string = string.concat(ones[hundred][hundred] + "hundred" + teens[one][one]);
            } else {
                string = string.concat(ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]);
            };
        }
        // Four digit numbers
        else if (i < 10000) {
            let substr = i.toString();
            let thousand = substr.charAt(0);
            let hundred = substr.charAt(1);
            let ten = substr.charAt(2);
            let one = substr.charAt(3);
            // If there is a non-zero number in the hundreds place and the number in the tens place is a one
            if (ten == 1 && hundred != 0) {
                string = string.concat(ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + teens[one][one]);
            // If there is zero in the hundreds place and the number in the tens place is a one
            } else if (ten == 1) {
                string = string.concat(ones[thousand][thousand] + "thousand" + teens[one][one]);
            // If there is a non-zero number in the hundreds place and the number in the tens place is not a one
            } else if (hundred != 0) {
                string = string.concat(ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]);
            // If there is a zero in the hundresd place and the number in the tens place is not a one
            } else {
                string = string.concat(ones[thousand][thousand] + "thousand" + tens[ten][ten] + ones[one][one]);
            };
        }
        // Five digit numbers
        else if (i < 100000) {
            let substr = i.toString();
            let tenthousand = substr.charAt(0);
            let thousand = substr.charAt(1);
            let hundred = substr.charAt(2);
            let ten = substr.charAt(3);
            let one = substr.charAt(4);
            if (tenthousand == 1 && hundred != 0 && ten == 1) {
                string = string.concat(teens[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + teens[one][one]);
            } else if (tenthousand == 1 && hundred != 0) {
                string = string.concat(teens[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]);
            } else if (tenthousand == 1 && ten == 1) {
                string = string.concat(teens[thousand][thousand] + "thousand" + teens[one][one]);
            } else if (tenthousand == 1) {
                string = string.concat(teens[thousand][thousand] + "thousand" + tens[ten][ten] + ones[one][one]);
            } else if (ten == 1 && hundred != 0) {
                string = string.concat(tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + teens[one][one]);
            } else if (ten == 1) {
                string = string.concat(tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + teens[one][one]);
            } else if (hundred != 0) {
                string = string.concat(tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]);
            } else {
                string = string.concat(tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + tens[ten][ten] + ones[one][one]);
            };
        }
        // Six digit numbers
        else if (i < 1000000) {
            let substr = i.toString();
            let hundredthousand = substr.charAt(0);
            let tenthousand = substr.charAt(1);
            let thousand = substr.charAt(2);
            let hundred = substr.charAt(3);
            let ten = substr.charAt(4);
            let one = substr.charAt(5);
            if (tenthousand == 1 && hundred != 0 && ten == 1) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + teens[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + teens[one][one]);
            } else if (tenthousand == 1 && hundred != 0) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + teens[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]);
            } else if (tenthousand == 1 && ten == 1) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + teens[thousand][thousand] + "thousand" + teens[one][one]);
            } else if (tenthousand == 1) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + teens[thousand][thousand] + "thousand" + tens[ten][ten] + ones[one][one]);
            } else if (hundred != 0 && ten == 1) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + teens[one][one]); 
            } else if (hundred != 0) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + ones[hundred][hundred] + "hundred" + tens[ten][ten] + ones[one][one]); 
            } else if (ten == 1) {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + teens[one][one]); 
            } else {
                string = string.concat(ones[hundredthousand][hundredthousand] + "hundred" + tens[tenthousand][tenthousand] + ones[thousand][thousand] + "thousand" + tens[ten][ten] + ones[one][one]); 
            }
        }
        // For the case of 1,000,000
        else if (i === 1000000) {
            string = string.concat("onemillion");
        }
    };
    console.log(string);
    const totalLetters = string.length;
    return totalLetters;
};

// console.log(letterCounter(81811, 81819));
console.log(letterCounter(true, 10));
// Expected 315, gets 288