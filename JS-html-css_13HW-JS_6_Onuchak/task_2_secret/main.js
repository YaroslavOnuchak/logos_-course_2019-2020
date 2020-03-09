let getSel = sell => document.querySelector(sell);

let text = ' У мене є секрет !';


getSel('.colors').innerText = text
getSel('.colors').addEventListener('mouseover', function () {

    this.style.backgroundColor = 'yellow';
    this.innerText = 'Хочеш знати який?'
    console.log(event.pageY)

})

getSel('.colors').addEventListener('mousedown', function () {
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    this.innerText = 'А я тобі не скажу';
})

getSel('.colors').addEventListener('mouseup', function () {
    this.style.backgroundColor = 'yellow';
    this.style.color = '';
    this.innerText = 'Хочеш знати який?'
})

getSel('.colors').addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
    this.innerText = text;
})