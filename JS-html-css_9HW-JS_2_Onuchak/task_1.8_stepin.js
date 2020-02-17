let number = +prompt(` enter mumber`)
let step = +prompt(`enter step`)
let ressult = 1;

if (step > 0) {

    for (let i = 0; i < step; i++) {
        ressult *= number;
    }

} else if (step < 0) {
    step = -step;
    for (i = 0; i < step; i++) {
        ressult *= number;
    }
    ressult = 1 / ressult;
} else {

    ressult = 1;

}
console.log(ressult);