let arr = ['html', 'css', 'html', 'js']


// https://learn.javascript.ru/task/array-unique
function removeDuplicates(arr) {
    let result = [];

    for (let item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        }
    }

    return result;
}




let arCheck1 = removeDuplicates(arr);

let arCheck2 = removeDuplicates(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss']);
console.log(arr)
console.log(arCheck1)
console.log(['html', 'css', 'js', 'html', 'js', 'python', 'js', 'scss'])
console.log(arCheck2)