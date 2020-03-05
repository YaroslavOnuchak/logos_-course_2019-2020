let arr = [1, 2, 3]

function arrCopy(arr) {
    let newArr = []
    for (let key in arr) {

        newArr[key] = arr[key]
    }
    return newArr
}
const arr1 = arrCopy(arr)
const arr2 = arrCopy([1, 2, 3, [10, 40]])
console.log(arr1)
console.table(arr2)