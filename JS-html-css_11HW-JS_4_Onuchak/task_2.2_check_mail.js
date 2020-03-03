let word = prompt(`enter mail`)

let dog = word.indexOf('@');


function countSpace() {
    switch (dog) {
        case 0:
        case -1:
        case (word.length - 1):
            alert('wrong mail')
    }

    return dog;
}
countSpace()