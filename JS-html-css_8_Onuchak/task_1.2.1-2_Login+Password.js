let ask = prompt(`enter name`, '');
let pass;

if (ask) {
    if (ask == 'Імя') {
        pass = prompt('enter password with UPPERCASE');
        if (pass) {
            if (pass == 'ЛОГОС') {
                alert('Ласкаво просимо!», ');
            } else {
                alert('Пароль невірний');
            }
        } else {
            alert('Вхід скасований');
        }

    } else {
        alert('Я вас не знаю');
    }
} else {
    alert('вхід скасований');
}