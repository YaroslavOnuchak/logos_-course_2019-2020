function declaration() {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
        // console.log(min);
    }
    return console.log(`max number is ${max}`);
}

declaration(-21, 2, -5);