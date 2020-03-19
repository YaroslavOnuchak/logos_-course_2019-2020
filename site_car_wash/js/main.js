for (let i = 0; i < document.servise_info.elements.length; i++) {


    document.servise_info.elements[i].onclick = function () {
        if (window.innerWidth < 774) {


            for (let x = 0; x < document.servise_info.elements.length; x++) {
                let a = getComputedStyle(document.servise_info.elements[x])
                if (x !== i && a.display == 'none') {

                    document.servise_info.elements[x].style.display = 'block';
                    document.querySelector('.servise-context').style.display = 'none';
                    document.querySelectorAll('.servise-context-text')[i].style.display = 'none';
                } else if (x == i) {
                    // case for last one
                } else {

                    document.servise_info.elements[x].style.display = 'none';
                    document.querySelector('.servise-context').style.display = 'block';
                    document.querySelectorAll('.servise-context-text')[i].style.display = 'block';
                    document.servise_info.elements[i].style.display = 'block';
                }

            }


        } else {
            for (let x = 0; x < document.querySelectorAll('.servise-context-text').length; x++) {
                if (document.querySelectorAll('.servise-context-text')[x].className !== 'servise-context-text hide') {
                    document.querySelectorAll('.servise-context-text')[x].classList.toggle('hide')
                }

            }
            document.querySelectorAll('.servise-context-text')[i].classList.toggle('hide')
        }
    }
}


document.querySelector('.review-btn').addEventListener('click', function () {
    document.querySelector('.review-write-fild').classList.toggle('hide')

})




