let arr = [1, 2, 3]
console.log(arr)

function arrToString(arr) {
    let newArr = []
    let newSt = arr.join(` `)
    // console.log(newSt)
    newArr = newSt.split(' ')
    return newArr
}
const arr1 = arrToString(arr)
const arr2 = arrToString([10, 200, 3333])
console.log(arr1)
console.log(arr2)
