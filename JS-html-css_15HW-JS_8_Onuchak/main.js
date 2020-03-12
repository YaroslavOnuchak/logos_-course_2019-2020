let date = new Date;
let queSr = x => document.querySelector(x)


let dBox = queSr('.date');
let tBox = queSr('.time');

let dNum = date.getDate();
let dMont = date.getMonth() + 1;
let dYear = date.getFullYear();
if (dNum < 10) dNum = '0' + dNum
if (dMont < 10) dMont = '0' + dMont
dBox.innerHTML = `<h3>${dNum}. ${dMont}. ${dYear}</h3>`


function localTime() {
    let date = new Date;
    let tH = date.getHours()
    let tM = date.getMinutes()
    let tS = date.getSeconds()
    if (tH < 10) tH = '0' + tH;
    if (tM < 10) tM = '0' + tM;
    if (tS < 10) tS = '0' + tS;


    tBox.innerHTML = `<h1>${tH} : ${tM} : ${tS}</h1>`
}
setInterval(localTime, 1000);





let ms = '000';
let s = '00';
let min = '00';
let h = '000';
let stopWatBox = queSr('.stopwatch')
stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`

function stopWatch() {
 stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
  
 ms++;
        if (ms < 10) {
            ms = '00' + ms
        } else if (ms < 100) {
            ms = '0' + ms
        }
        // console.log(ms)
        stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
        if (ms === 100) {
            s++;
            if (s < 10) s ='0' + s;
            ms = 0;
            stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
            if (s === 60) {
                min++;
                if (min < 10) min ='0' + min;
                s = 0;
                stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
                if (min === 60) {
                    if (h < 10) h = '0'+ h
                    h++;

                    m = 0;
                    stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
                }
            }
        }
        
        let  sW

}
let  sW
queSr('#start').addEventListener('click', function(){
    
     sW = setInterval(stopWatch, 10)
})
queSr('#stop').addEventListener('click', function(){
    clearInterval(sW)
})
queSr('#loop').addEventListener('click', function(){
    queSr('.loop').innerText =  stopWatBox.innerText 
})
queSr('#reset').addEventListener('click', function(){
     ms = '000';
     s = '00';
     min = '00';
     h = '000';
     stopWatBox.innerHTML = `<h3>${h} : ${min} : ${s} : ${ms}</h3>`
})
 