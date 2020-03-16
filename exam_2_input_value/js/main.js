let getSel = sell => document.querySelector(sell);

let result_box = document.querySelector('.result');

// text style ******************************************************
let boldText = document.forms['text_style'].t_Bold;
let cursiveText = document.forms['text_style'].italic;
let undrLine = document.forms['text_style'].underline;
let throughLine = document.forms['text_style'].line_through;


boldText.addEventListener('click', function () {
    if (this.checked) {

        result_box.style.fontWeight = this.value;

    } else {
        result_box.style.fontWeight = '';

    }
})


cursiveText.addEventListener('click', function () {
    if (this.checked) {
        result_box.style.fontStyle = this.value;

    } else {
        result_box.style.fontStyle = '';

    }
})
undrLine.addEventListener('click', function () {
    if (this.checked) {
        result_box.style.textDecoration = this.value;

    } else {
        result_box.style.textDecoration = '';

    }
})
throughLine.addEventListener('click', function () {
    if (this.checked) {
        result_box.style.textDecoration = this.value;

    } else {
        result_box.style.textDecoration = '';

    }
})
// text alignt**********************************************

document.text_align.addEventListener('click', function () {
    for (let i = 0; i < this.elements.length; i++) {

        if (this.elements[i].checked) {
            result_box.style.textAlign = this.elements[i].value;

        }
    }
})

// font family **************
document.font_family.addEventListener('click', function () {
    for (let i = 1; i < this.elements.length; i++) {

        this.elements[i].onclick = function () {
            result_box.style.fontFamily = this.value;

        }
    }
})
// font family btn **************
for (let i = 1; i < document.font_family.elements.length; i++) {

    document.font_family.elements[i].style.fontFamily = document.font_family.elements[i].value;

}
// font size ************

document.font_size.addEventListener('click', function () {
    for (let i = 1; i < this.elements.length; i++) {

        this.elements[i].onclick = function () {
            result_box.style.fontSize = this.value;

        }
    }
})
// font size btn **************
for (let i = 1; i < document.font_size.elements.length; i++) {

    document.font_size.elements[i].style.fontSize = document.font_size.elements[i].value;

}


// //  set color and background colors ***************
let colorText = document.t_color.color_text;
let colorBg = document.bg.bg_btn;
let bgElement = document.querySelectorAll('.bg_element')



function bgBoxColors() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.backgroundColor = document.box_colors.elements[i].value;

    }
}
bgBoxColors()


// text color **********
colorText.addEventListener('click', function () {
    getSel('#staticBackdropLabel_2').style.display = 'block';

    for (let x = 0; x < bgElement.length; x++) {
        bgElement[x].style.display = 'none'
    }
    for (let i = 0; i < document.box_colors.elements.length; i++) {
        document.box_colors.children[i].onclick = function () {

            result_box.style.color = document.box_colors.elements[i].value;

        }
    }
})


// background ********************************
let arrImg = ['https://images2.alphacoders.com/989/thumb-1920-989589.jpg',
    'https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.wallpaperscraft.com/image/train_railway_art_127436_1280x720.jpg',
    'https://images.wallpaperscraft.com/image/bike_chopper_stylish_74201_1280x720.jpg',
    'https://images.wallpaperscraft.com/image/galaxy_space_light_stars_nebula_59618_1280x720.jpg',
    'https://steamuserimages-a.akamaihd.net/ugc/824565659825027843/C5B29E7AD93E04BC974FC0DB9D336224907A04B7/',
    'https://images4.alphacoders.com/878/thumb-1920-8788.png',
    'https://www.flywallpaper.com/mypics/max/34/346202_the-joker-wallpaper.jpg',
    'https://cdn.vox-cdn.com/uploads/chorus_asset/file/13272825/The_Verge_Hysteresis_Wallpaper_Small.0.jpg'
]

function bgImg() {
    for (let x = 0; x < bgElement.length; x++) {
        bgElement[x].style.display = 'block'
    }
    for (let i = 0; i < document.box_img.children.length; i++) {

        document.box_img.children[i].style.background = `url(${arrImg[i]})`;

    }
}


colorBg.addEventListener('click', function () {
    bgImg()

    getSel('#staticBackdropLabel_2').style.display = 'none';
    //    bg color

    for (let i = 0; i < document.box_colors.elements.length; i++) {
        document.box_colors.children[i].onclick = function () {
            document.body.style.background = '';
            document.body.style.backgroundColor = document.box_colors.elements[i].value;

        }
    }
    // bg img
    for (let i = 0; i < document.box_img.children.length; i++) {
        document.box_img.children[i].onclick = function () {
            document.body.style.background = `url(${arrImg[i]})`;

        }
    }
    // bg upload
    document.querySelector("#inputGroupFile01").onchange = function () {
        let url = URL.createObjectURL(this.files[0]);
        document.body.style.background = `url(${url})`;
    }

})

// mail**************************

let regMeseg = getSel('.mail_meseg');
let signBtn = getSel('#signIn');
let lockBtn = getSel('#lock_btn')
const logEnter = 'admin';
const passEnter = 'admin';

lockBtn.addEventListener('click', function () {
    if (getSel('.fa-lock-open').className == 'fas fa-lock-open hide') {
        this.setAttribute('data-target', "#static_mail")
    } else {
        this.setAttribute('data-target', "#static_mail_out")

        signBtn.removeAttribute('data-dismiss');
    }
})

// log out  ----*************
getSel('#signOut').addEventListener('click', function () {
    getSel('.fa-lock-open').classList.add('hide')
    getSel('.fa-lock').classList.remove('hide')
    document.edit.elements[0].setAttribute('disabled', 'true');
    document.edit.setAttribute('title', 'need sign in');
    this.setAttribute('data-dismiss', 'modal')
})

// sign in ***************
signBtn.addEventListener('click', function () {
    regMeseg.innerText = '';
    let log = document.signIn.log.value;
    let pass = document.signIn.pass.value;
    if (log == '' || pass == '') {
        regMeseg.innerText = 'value is emty'
    } else if (log == logEnter && pass == passEnter) {
        // signBtn.setAttribute('aria-label',"Close")
        signBtn.setAttribute('data-dismiss', 'modal')
        document.edit.elements[0].removeAttribute('disabled');
        getSel('.fa-lock-open').classList.remove('hide')
        getSel('.fa-lock').classList.add('hide')
        document.edit.removeAttribute('title');

    } else {
        regMeseg.innerText = 'wrong log or password'
    }

})


// edit
document.edit.elements[0].addEventListener('click', function () {
    getSel('.style-box').classList.add('hide');
    getSel('.edit-box').classList.remove('hide');
    result_box.classList.add('hide');
    getSel('.textarea').classList.remove('hide');

    getSel('textarea').value = result_box.innerHTML;
})

document.save.saveBtn.addEventListener('click', function () {
    getSel('.style-box').classList.remove('hide');
    getSel('.edit-box').classList.add('hide');
    result_box.classList.remove('hide');
    getSel('.textarea').classList.add('hide');
    result_box.innerHTML = getSel('textarea').value;

})


// clean value from input

for (let i = 0; i < document.create_table.elements.length - 2; i++) {
    document.create_table.elements[i].value = ''
}
for (let i = 0; i < document.create_list_ol.elements.length - 2; i++) {
    document.create_list_ol.elements[i].value = ''
}
for (let i = 0; i < document.create_list_ul.elements.length - 2; i++) {
    document.create_table.elements[i].value = ''
}
// // create************

let table;
let innerTable;
getSel('#creat_tabl_btn').addEventListener('click', function () {

    let countTr = document.create_table.tr.value;
    let countTd = document.create_table.td.value;
    let widthBord = document.create_table.wBorder.value;
    let typeBord = document.create_table.type_of_border.value;
    let colorBord = document.create_table.color_of_border.value;
    let hTd = document.create_table.hTd.value;
    let wTd = document.create_table.wTd.value;
    let cauntEmtyFild = 0;
    for (let y = 0; y < document.create_table.elements.length - 2; y++) {


        if (document.create_table.elements[y].value == '') {
            cauntEmtyFild++
            if (cauntEmtyFild > 0) {

                getSel('.table_meseg').innerText = 'value is emty'
            }

        }

    }
    if (cauntEmtyFild == 0) {
        getSel('.table_meseg ').innerText = '';

        table = document.createElement('table')
        table.style.border = `${widthBord}px ${typeBord} ${colorBord}`;
        table.style.borderCollapse = `collapse`;

        for (let i = 1; i <= countTr; i++) {
            let tr = document.createElement('tr');
            tr.style.border = `${widthBord}px ${typeBord} ${colorBord}`;
            for (let j = 1; j <= countTd; j++) {
                let td = document.createElement('td');
                td.innerText = `TD`;
                td.style.border = `${widthBord}px ${typeBord} ${colorBord}`;
                td.style.height = `${hTd}px`
                td.style.width = `${wTd}px`
                tr.appendChild(td)
            }
            table.appendChild(tr);
        }
        innerTable = table.innerHTML;
        getSel('textarea').value += `<table>${innerTable}</table>`;
    }
})

// btn reset***************************
getSel('#reset_tabl_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_table.elements.length - 2; i++) {
        document.create_table.elements[i].value = ''
    }
})
getSel('#reset_list_ol_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_list_ol.elements.length - 2; i++) {
        document.create_list_ol.elements[i].value = ''
    }
})
getSel('#reset_list_ul_btn').addEventListener('click', function () {
    for (let i = 0; i < document.create_list_ul.elements.length - 2; i++) {
        document.create_list_ul.elements[i].value = ''
    }
})


// create list ***********************************
let listOl;
let listUl;
let listOlInnerText;
let listUlInnerText;

getSel('#creat_list_ol_btn').addEventListener('click', function () {
    let countLi = getSel('#li').value;
    let styleLi = document.create_list_ol.type_of_marks.value;
    let cauntEmtyFild = 0;
    for (let y = 0; y < document.create_list_ol.elements.length - 2; y++) {


        if (document.create_list_ol.elements[y].value == '') {
            cauntEmtyFild++
            if (cauntEmtyFild > 0) {

                getSel('#list_meseg').innerText = 'value is emty';

            }
        }
    }
    if (cauntEmtyFild == 0) {
        getSel('#list_meseg ').innerText = '';
        listOl = document.createElement('ol')

        for (let i = 1; i <= countLi; i++) {
            let li = document.createElement('li')
            li.innerText = `items ${i}`;
            li.style.listStyleType = styleLi;
            listOl.appendChild(li);
        }
        listOlInnerText = listOl.innerHTML;
        getSel('textarea').value += `<ol>${listOlInnerText}</ol>`;
    }
})

getSel('#creat_list_ul_btn').addEventListener('click', function () {
    let countLi = getSel('#li2').value;
    let styleLi = document.create_list_ul.type_of_mark2.value;
    let cauntEmtyFild = 0;
    for (let y = 0; y < document.create_list_ul.elements.length - 2; y++) {


        if (document.create_list_ul.elements[y].value == '') {
            cauntEmtyFild++
            if (cauntEmtyFild > 0) {
                getSel('#list_meseg2').innerText = 'value is emty';

            }
        }
    }
    if (cauntEmtyFild == 0) {
        getSel('#list_meseg2').innerText = '';
        listUl = document.createElement('ul')

        for (let i = 1; i <= countLi; i++) {
            let li = document.createElement('li')
            li.innerText = `items ${i}`;
            li.style.listStyleType = styleLi;
            listUl.appendChild(li);
        }
        listUlInnerText = listUl.innerHTML;
        getSel('textarea').value += `<ul>${listUlInnerText}</ul>`;
    }
})