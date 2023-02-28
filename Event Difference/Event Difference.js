'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'findLongestSubsequence' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findLongestSubsequence(arr) {
  const arrObj = {};
  
  arr.forEach((item) => {
    arrObj[item] = true;
  });
  
  let i = 0;
  let currMax = 1;
  let totalMax = 1;
  
  while (i < arr.length) {
    let next = arr[i] ++;
    
    while (arrObj[next]) {
      currMax++;
      
      if (currMax > totalMax) totalMax = currMax;
      
      next ++;
    }
    
    i ++;
    
    currMax = 1;
  }
  return totalMax;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = findLongestSubsequence(arr);

    ws.write(result + '\n');

    ws.end();
}
