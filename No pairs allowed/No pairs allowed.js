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
 * Complete the 'minimalOperations' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY words as parameter.
 */

function minimalOperations(words) {
    const counter = []
    
    words.forEach(function(item){
        const word = item.split("")
        let count = 0
        
        for (let i = 0; i < word.length; i ++) {
            if (word[i] == word[i+1]) {
                count++
                i++
            }
        }
        
        counter.push(count)
    })
    
    return counter
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const wordsCount = parseInt(readLine().trim(), 10);

    let words = [];

    for (let i = 0; i < wordsCount; i++) {
        const wordsItem = readLine();
        words.push(wordsItem);
    }

    const result = minimalOperations(words);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
