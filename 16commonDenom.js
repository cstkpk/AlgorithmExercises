// You will have a list of rationals in the form
//  [ [numer_1, denom_1] , ... [numer_n, denom_n] ]

// where all numbers are positive ints.

// You have to produce a result in the form
// "(N_1, D) ... (N_n, D)"

// in which D is as small as possible and
//  N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.

// Example:

// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that first translations were written long ago - more than 4 years - these translations have only irreducible fractions. Newer translations have some reducible fractions. 
// To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

const lst = [[1, 2], [1, 3], [1, 4], [1, 5]];
// const lst = [[190, 207], [10, 31], [67, 4]];
let commDenom = 0;

const convertFrac = lst => {
    let denomArr = [];
    let denomArr2 = [];
    let numArr = [];
    let results = "";
    // let commDenom = 0;
    for (let i = 0; i < lst.length; i++) {
        denomArr.push(lst[i][1]);
        denomArr2.push(lst[i][1]);
        numArr.push(lst[i][0]);
    }
    console.log(denomArr);
    lcm_more_than_two_numbers(denomArr);
    // let commDenom = denomArr[0];
    // for (let i = 1; i < denomArr.length; i++) {
        // commDenom = commDenom * denomArr[i];
    // }
    console.log(`commDenom 42: ${commDenom}`);
    console.log(`denomArr 43: ${denomArr2}`);

    let newNum = [];
    // for (let i = 0; i < denomArr.length; i++) {
    //     newNum.push((commDenom / denomArr[i]) * numArr[i]);
    // }
    for (let i = 0; i < denomArr2.length; i++) {
        newNum.push((commDenom / denomArr2[i]) * numArr[i]);
    }

    for (let i = 0; i < lst.length; i++) {
       results = results.concat(`(${newNum[i]},${commDenom})`); 
    }
    console.log(results);
};

convertFrac(lst);

// (new denom / old denom) * old numerator
// (commDenom / denomArr[i]) * numArr[i]

function lcm_more_than_two_numbers(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(i=0;i<l;i++) {
        r1 = input_array[i] % input_array[i + 1];
        if(r1 === 0) {
            input_array[i + 1] = (input_array[i] * input_array[i+1]) / input_array[i + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[i + 1] = (input_array[i] * input_array[i + 1]) / r1;
            }
            else {
                input_array[i+1] = (input_array[i] * input_array[i + 1]) / r2;
            }
        }
    }
    // return input_array[l - 1];
    commDenom = input_array[l - 1];
    console.log(commDenom);

}