let getSel = sell => document.querySelector(sell);
let toggle = function (s, h) {

    h.classList.remove('show')
    h.classList.add('hide')
    s.classList.remove('hide')
    s.classList.add('show')
}

let edit = document.querySelector('.edit');
let style = document.querySelector('.style');
let result_box = document.querySelector('.result');

getSel('#save').addEventListener('click', function () {
    result_box.innerHTML = getSel('.textarea').value;
    edit.classList.remove('show')
    edit.classList.add('hide');

})

getSel('#edit').addEventListener('click', function (event) {

    if (edit.className == 'edit container hide') {
        getSel('.textarea').value = result_box.innerHTML
        toggle(edit, style)
    } else {

        edit.classList.remove('show')
        edit.classList.add('hide')
        style.classList.remove('show')
        style.classList.add('hide')
    }
})

getSel('#style').addEventListener('click', function (event) {

    if (style.className == 'style container hide') {
        toggle(style, edit)

    } else {
        edit.classList.remove('show')
        edit.classList.add('hide')
        style.classList.remove('show')
        style.classList.add('hide')
    }

})


//  font size change ********************
document.font_size.addEventListener('click', function () {
    for (let i = 0; i < document.font_size.elements.length; i++) {

        if (document.font_size.elements[i].checked) {
            result_box.style.fontSize = this.elements[i].value;

        }
    }
})

//  font family change ***************************
document.font_family.addEventListener('change', function () {
    result_box.style.fontFamily = this.select.value;
    // for (let i = 0; i < this.select.options.length; i++) {
    //     if (this.select.options[i].selected) {
    //         document.querySelector('.result').style.fontFamily = this.select.options[i].value;
    //     }
    // }
})



//  set color and background colors ***************
let boxColors = document.box_colors;
let colorText = document.bth_colors.color_text;
let colorBg = document.bth_colors.background_colors;
//  set color of square
function bgBoxColors() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.backgroundColor = document.box_colors.elements[i].value;


    }
}
bgBoxColors()

colorText.addEventListener('click', function () {
    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')
        boxColors.style.display = 'flex';
        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {

                result_box.style.color = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }

    } else if (boxColors.className == 'wrap_colors_choose show') {

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {

                result_box.style.color = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }

    }

})


colorBg.addEventListener('click', function () {
    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')
        boxColors.style.display = 'flex';
        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {
                result_box.style.backgroundColor = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }

    } else if (boxColors.className == 'wrap_colors_choose show') {

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {
                result_box.style.backgroundColor = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }

    }

})
colorBg.addEventListener('dblclick', function () {
    if (boxColors.className == 'wrap_colors_choose show') {
        boxColors.classList.remove('show')
        boxColors.classList.add('hide')
    } else {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')
    }

})
colorText.addEventListener('dblclick', function () {
    if (boxColors.className == 'wrap_colors_choose show') {
        boxColors.classList.remove('show')
        boxColors.classList.add('hide')
    } else {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')
    }

})

// text style ******************************************************
let boldText = document.forms['Style'].bold_text;
let cursiveText = document.forms['Style'].cursive_text;


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



// create************

document.querySelector('#add').addEventListener('click', function () {
    toggle(getSel('.two'), getSel('.one'))


})

let formList = document.create_list;
let formTable = document.create_table;


// choose table or list************************
document.type_of_create.addEventListener('click', function () {
    if (document.type_of_create.elements[0].checked) {
        toggle(formTable, formList)


    } else {
        toggle(formList, formTable)
    }

})


// create list ***********************************
let list;
let listInnerText;

document.getSel('#creat_list_btn').addEventListener('click', function () {
    let countLi = getSel('#li').value;
    list = document.createElement('ul')
    for (let i = 1; i <= countLi; i++) {
        let li = document.createElement('li')
        li.innerText = `items ${i}`;
        li.style.listStyleType = document.create_list.type_of_marks.value;
        list.appendChild(li);
    }
    listInnerText = list.innerHTML;
    formList.classList.remove('show')
    formList.classList.add('hide')


    toggle(getSel('.one'), getSel('.two'))
    getSel('.textarea').value += `<ul>${listInnerText}</ul>`;
    document.type_of_create.elements[1].checked = false
})


// create table*********************
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

    formTable.classList.add('hide')
    formTable.classList.remove('show')

    toggle(getSel('.one'), getSel('.two'))

    getSel('.textarea').value += `<table>${innerTable}</table>`;
    document.type_of_create.elements[0].checked = false
})