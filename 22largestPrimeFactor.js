// Project Euler: Problem 3: Largest prime factor (freecodecamp)
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

const largestPrimeFactor = number => {
    let largest = 0;
    let isPrime = true;
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            // console.log("I " + i);
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    // console.log(isPrime);
                    // console.log(j);
                    // console.log("----------")
                }
            }
            if (isPrime) {
                largest = i;
                // console.log("New largest: " + largest);
            }
        }
    }
    return largest;
};

console.log(largestPrimeFactor(20719));

// Fun fact: 20,719 is a prime number