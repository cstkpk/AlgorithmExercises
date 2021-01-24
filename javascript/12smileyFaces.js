// Given an array (arr) as an argument complete the function countSmileys that should 
// return the total number of smiling faces.

// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :] 

// EXAMPLES:
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

// Note: In case of an empty array return 0. 
// You will not be tested with invalid input (input will always be an array). 
// Order of the face (eyes, nose, mouth) elements will always be the same

const arr = [':)', ';(', ';}', ':-D'];

const countSmileys = arr => {
    const validEyes = [":", ";"];
    const validNose = ["-", "~"];
    const validMouth = [")", "D"];
    let counter = 0;
    arr.forEach(elem => {
        if (elem[0] === validEyes[0] || elem[0] === validEyes[1]) {
            if (elem[1] === validNose[0] || elem[1] === validNose[1] || elem[1] === validMouth[0] || elem[1] === validMouth[1]) {
                if (elem[2]) {
                    if (elem[2] === validMouth[0] || elem[2] === validMouth[1]) counter++;
                }
                else counter++;
            };
        };
    });
    return counter;
};

// OR

const countSmileys = arr => {
    const valid = [":", ";", "-", "~", ")", "D"];
    let counter = 0;
    arr.forEach(elem => {
        if (elem[0] === valid[0] || elem[0] === valid[1]) {
            if (elem[1] === valid[2] || elem[1] === valid[3] || elem[1] === valid[4] || elem[1] === valid[5]) {
                if (elem[2]) {
                    if (elem[2] === valid[4] || elem[2] === valid[5]) counter++;
                }
                else counter++;
            };
        };
    });
    return counter;
};

// Coolest solution!

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

console.log(countSmileys(arr));