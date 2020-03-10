let getSel = sell => document.querySelector(sell);

let img = getSel('img');
img.style.position = 'absolute';

document.bth_move.addEventListener('click', function (event) {
    console.log('action:', event)

    if (event.toElement.name == 'left') {
        let goLeft = img.offsetLeft;
        img.style.transform = 'rotate(-90deg)'
        if (goLeft > 0) {
            console.log(goLeft)
            img.style.left = goLeft - 10 + 'px'
        }

    }
    if (event.toElement.name == 'top') {
        img.style.transform = 'rotate(0)'
        let goUp = img.offsetTop;
        if (goUp > 0) {
            console.log(goUp)
            img.style.top = goUp - 10 + 'px'
        }
    }
    if (event.toElement.name == 'right') {
        img.style.transform = 'rotate(90deg)'
        console.log(window.innerWidth)
        let goRight = getSel('img').offsetLeft;

        if (goRight < window.innerWidth - 110) {
            img.style.left = goRight + 10 + 'px'
        }

    }
    if (event.toElement.name == 'down') {
        img.style.transform = 'rotate(-180deg)'
        console.log(window.innerHeight)
        let goTop = img.offsetTop;
        if (goTop < window.innerHeight - 110) {
            img.style.top = goTop + 10 + 'px'
        }
    }
})