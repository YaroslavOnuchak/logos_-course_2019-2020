let number = 2225;





function getSqrt(number) {

}
if (number == null || number == '') {
    console.log('pls, enter number')

} else {
    if (Number.parseFloat(number) > 0) {

        let ps = Math.sqrt(number).toFixed(2)
        console.log(`sqrt from ${number} = ${ps}`)

    } else if (Number.parseFloat(number) < 0) {

        console.log(`enter positive number`)

    } else {

        alert('its NaN , enter Number')
    }
}

getSqrt()