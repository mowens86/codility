// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (N) => {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    let answer = 0;
    let tempArr = [];
    const answerArr = [];

    // Get binary for value N
    const convertedBinary = N.toString(2);
    
    // Split into array
    const splitArr = convertedBinary.split('');

    // Loop through splitArr
    for (let el in splitArr) {
        // Check if current index is 1
        if (splitArr[el] == 1 && splitArr[el - 1] != 1) { 
            counter++;
            // Check if counter is an even number and the tempArr length is greater than 0
            if ( counter % 2 === 0 && tempArr.length > 0) { 
                answerArr.push(tempArr);
                tempArr = [];
                counter++;
            }
        }
        // Check if index is 0
        if (splitArr[el] == 0) {
            tempArr.push(splitArr[el]);
            // console.log(splitArr[el]);
        }
    }
    
    // Map through answerArr
    answerArr.map(arr => {
        if (arr.length > answer) {
            // If the length is bigger than the previous length then replace it for the final answer
            answer = arr.length;
        }
    });
    return answer;
};

solution(51712);

/** 100% Score
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */
