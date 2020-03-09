let getId = id => document.getElementById(id);

let getSel = sell => document.querySelector(sell);

let cauntMous = 0
getSel('.colors').addEventListener('mouseover', function () {
    if (cauntMous === 0) {
        this.style.backgroundColor = 'red';
        console.log(event.pageY)
        cauntMous++
    } else if (cauntMous === 1) {
        this.style.backgroundColor = 'green';
        console.log(event.pageY)
        cauntMous++
    } else {
        this.style.backgroundColor = 'yellow';
        console.log(event.pageY);
        cauntMous = 0;
    }

})

getSel('.colors').addEventListener('mouseout', function () {
    this.style.backgroundColor = '';
})