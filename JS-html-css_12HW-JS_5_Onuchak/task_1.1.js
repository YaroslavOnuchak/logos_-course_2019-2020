function getDigits(num) {
    let word = '';
    word += num
    let c = `0${word.substring(word.indexOf('.'))}`
    console.log(c)
}
getDigits(1.2555)