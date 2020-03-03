let link = prompt('enter URL ')
let wrongWords = ['http://', 'https://']

function linkClear() {
    let newLink = '';

    for (let i = 0; i < wrongWords.length; i++) {
        if (link.indexOf(`${wrongWords[i]}`) >= 0) {

            for (let j = wrongWords[i].length; j < link.length; j++) {
                newLink += link.charAt(j)
            }

        }
    }
    return newLink
}

console.log(linkClear())