let name = prompt('enter your name');

let mainH = prompt('Main div height');
let mainW = prompt('Main div width');
let mainBg = prompt('Main background');

let seconH = prompt('secon div height');
let seconW = prompt('secon div width');
let seconBg = prompt('secon background');


document.write(`<div style="width: ${mainW}px; height: ${mainH}px; background-color: ${mainBg}; display: flex; text-align: center; margin: 2rem auto;
align-items: center;">
<div style="width: ${seconW}px; height: ${seconH}px;  margin: 0 auto;background-color: ${seconBg}">Здоров ${name}</div>
</div>`)