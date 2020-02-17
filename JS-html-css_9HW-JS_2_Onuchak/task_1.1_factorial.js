let factorialNum = +prompt('enter num');
let result = 1;
for (let i = 0; i < factorialNum; i++) {
    result *= (factorialNum - i);
}
console.log(result)