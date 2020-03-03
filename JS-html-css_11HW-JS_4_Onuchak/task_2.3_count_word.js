let word = prompt(`enter text with html`)


let count = 0;
let y = 0;

function countWords() {

    for (let i = 0; i < word.length; i++) {
        if (word.indexOf('html', y) >= 0) {
            y = word.indexOf('html', y) + 3;
            count++;

        }
    }
    return console.log(count)
}
countWords()