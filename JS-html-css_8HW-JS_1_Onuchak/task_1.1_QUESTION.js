let arrQuesr = ["red or green", "egg or chicken", "batman or superman", "up or down", "right or left", "water or fire", "tea or coffe", "cat or dog", "sleep or play", "netflix or youtube"];

console.log(arrQuesr);

let countTrue = 0;
for (let i = 0; i < 10; i++) {
    let ask = +prompt(`enter  number your answer:\n\ first( 1 ) or second( 2 ) value \n\ \n\ ${arrQuesr[i]}`, '');

    (ask == '1') ? countTrue++ : alert('false answer');
}

if (countTrue < 3) {
    alert(`get lost \n\ \n\ your result right answer ${countTrue}, `);
} else if (countTrue < 5) {
    alert(`good job \n\ \n\ your result right answer ${countTrue}`);
} else {
    alert(`well done \n\ \n\ your result right answer ${countTrue}`);
}