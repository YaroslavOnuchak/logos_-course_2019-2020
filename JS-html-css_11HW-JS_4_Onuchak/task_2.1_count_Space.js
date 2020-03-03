let word = prompt(`enter srting`)

let space = ' ';
let count = 0;

function countSpace() {
    for (let i = 0; i < word.length; i++) {

        if (word.charAt(i) == space) {
            count++;
        }

    }
    return console.log(count)
}
countSpace()