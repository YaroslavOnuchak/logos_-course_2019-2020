let count = 4;
let pass = 'admin';
let enterPass = '';
while (count >= 0 && pass != enterPass) {
    enterPass = prompt('enter password')
    if (enterPass == pass) {
        alert('Запрошуємо на сайт');
    } else {
        alert(`у вас залишилося ${count} спроб`);
    }
    count--
}