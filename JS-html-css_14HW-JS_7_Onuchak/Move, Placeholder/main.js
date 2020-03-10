let getSel = sell => document.querySelector(sell);
getSel('#moveBt').addEventListener('click', function () {

    if (document.move.li.value != '') {
        getSel('#result').value = document.move.li.value;
        document.move.li.value = '';
    }
})
document.placeholder.plc.addEventListener('change', function () {

    if (this.value != '') {
        this.setAttribute('placeholder', this.value);
        this.value = ''
    }
})