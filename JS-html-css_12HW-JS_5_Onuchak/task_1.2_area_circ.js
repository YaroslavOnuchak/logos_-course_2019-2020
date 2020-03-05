let rad = +prompt(`Enter radius circle`)

function getArea(rad) {

}
if (rad == null || rad == '') {
    console.log('Будь ласка, введіть радіус')



} else {
    if (!Number.isNaN(rad)) {
        let ps = (Math.PI * Math.pow(rad, 2)).toFixed(2);
        console.log(`${ps}кв.од`)

    } else {

        alert('введіть число')
    }
}

getArea()