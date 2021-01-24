// ***** NEW VERSION ******

// const lst = [[1, 2], [1, 3], [1, 4], [1, 5]];
const lst = [[190, 207], [10, 31], [67, 4]];
let commDenom = 0;

const convertFrac = lst => {
    let denomArr = [];
    let denomArr2 = [];
    let numArr = [];
    let results = "";
    for (let i = 0; i < lst.length; i++) {
        denomArr.push(lst[i][1]);
        denomArr2.push(lst[i][1]);
        numArr.push(lst[i][0]);
    }
    console.log(denomArr);
    LCM(denomArr);

    console.log(`commDenom 42: ${commDenom}`);
    console.log(`denomArr 43: ${denomArr2}`);

    let newNum = [];

    for (let i = 0; i < denomArr2.length; i++) {
        newNum.push((commDenom / denomArr2[i]) * numArr[i]);
    }

    for (let i = 0; i < lst.length; i++) {
       results = results.concat(`(${newNum[i]},${commDenom})`); 
    }
    console.log(results);
};

function LCM(A) {
    // A is an integer array (e.g. [-50,25,-45,-18,90,447])
    var n = A.length,
      a = Math.abs(A[0]);
    for (var i = 1; i < n; i++) {
      var b = Math.abs(A[i]),
        c = a;
      while (a && b) {
        a > b ? (a %= b) : (b %= a);
      }
      a = Math.abs(c * A[i]) / (a + b);
    }
    commDenom = a;
    return a;
  }
// lcm_more_than_two_numbers([207, 31, 4]);

convertFrac(lst);