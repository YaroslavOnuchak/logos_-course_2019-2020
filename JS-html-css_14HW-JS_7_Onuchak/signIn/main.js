let getSel = sell => document.querySelector(sell);
getSel('.singOut').style.display = 'none'
getSel('#singIn').addEventListener('click', function () {
    if (document.singIn.chec.checked) {


        getSel('.singIn').style.display = 'none'
        getSel('.singOut').style.display = 'block'
        getSel('.person').innerText = document.singIn.elements[0].value + ' ' + document.singIn.elements[1].value;
        getSel('.mail').innerText = document.singIn.mail.value;
        getSel('.position').innerText = document.singIn.select.value;
    } else {
        alert('click checbox')
    }

})
getSel('#singOut').addEventListener('click', function () {
    getSel('.singIn').style.display = 'block'
    getSel('.singOut').style.display = 'none'
    for (let i = 0; i < document.singIn.elements.length; i++) {
        document.singIn.elements[i].value = ''
    }
})