let arr = [1222, 2, 3]



function getLength(arr) {
    let newArr = []
    for (let item of arr) {
        item = item.toString().length;
        newArr.push(item)
    }
    return newArr
}


const arr1 = getLength(arr)
const arr2 = getLength([10, 200, 3333])
console.log(arr1)
console.log(arr2)