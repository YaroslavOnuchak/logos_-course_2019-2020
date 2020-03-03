let MyMath = {

}
MyMath.a = 5;
MyMath.b = 2;

MyMath.sum = function () {
    let sum = this.a + this.b;
    return console.log(sum)

}
MyMath.multiplication = function () {
    let c = this.a * this.b;
    return console.log(c)

}
MyMath.division = function () {
    let c = this.a / this.b;
    return console.log(c)

}
MyMath.subtraction = function () {
    let c = this.a - this.b;
    return console.log(c)

}
console.log(MyMath)
MyMath.sum()
MyMath.multiplication()
MyMath.division()
MyMath.subtraction()