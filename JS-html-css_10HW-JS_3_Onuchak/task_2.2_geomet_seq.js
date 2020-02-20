let b1 = 1;

let expression = function (x, y) {
    let sum = 0;
    for (i = 1; i <= x; i++) {
        let b = b1 * (y ** (i - 1));
        // console.log(b)
        sum += b
    }

    return (console.log(`sum geomet: ${sum}`))
}
expression(5, 2)


let expression1 = function (x, y) {
    let sum = b1 * ((1 - y ** x) / (1 - y))
    return (console.log(`sum geomet: ${sum}`))
}
expression1(5, 2);