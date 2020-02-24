let edit = document.querySelector('.edit');
let style = document.querySelector('.style');
let result_box = document.querySelector('.result');



document.querySelector('#edit').addEventListener('click', function (event) {

    if (edit.className == 'edit hide') {
        edit.classList.remove('hide')
        edit.classList.add('show')
        document.querySelector('.textarea').value = result_box.innerHTML


        style.classList.remove('show')
        style.classList.add('hide')
    } else {
        edit.classList.remove('show')
        edit.classList.add('hide')

        style.classList.remove('show')
        style.classList.add('hide')
    }
})

document.querySelector('#style').addEventListener('click', function (event) {

    if (style.className == 'style hide') {
        edit.classList.remove('show')
        edit.classList.add('hide')
        style.classList.remove('hide')
        style.classList.add('show')


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


colorText.addEventListener('click', function () {
    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.style.display = 'flex';
        for (i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.elements[i].onclick = function () {
                result_box.style.color = this.value;
                boxColors.classList.add('hide')
            }
        }

    } else {
        boxColors.style.display = 'none';
        boxColors.classList.add('hide')
    }
})


colorBg.addEventListener('click', function () {
    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.style.display = 'flex';
        for (i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.elements[i].onclick = function () {
                result_box.style.backgroundColor = this.value;
                boxColors.classList.add('hide')
            }
        }

    } else {
        boxColors.style.display = 'none';
        boxColors.classList.add('hide')
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

// create******
document.querySelector('#add').addEventListener('click', function () {
    document.querySelector('.one').style.display = 'none';
    document.querySelector('.two').classList.remove('hide');

})
console.log(document.create_list.elements[1])

// let list = document.createElement(`ul`)
// let countLi = document.create_list.li.value;
// document.querySelector('#cret_list_btn').addEventListener('click', function () {
//     // document.querySelector('.two').classList.add('hide');
//     document.querySelector('.one').style.display = 'block';
//     for (i = 1; i <= countLi; i++) {
//         let li = document.createElement('li')
//         list.appendChild(li);
//         li.innerText = `items ${i}`;
//         li.style.listStyleType = document.create_list.Type_of_marks.value;
//     }
//     console.log(list)
    
// })
let list = document.createElement(`ul`)
let countLi = document.create_list.li.value;
for (i = 1; i <= countLi; i++) {
    let li = document.createElement('li')
    list.appendChild(li);
    li.innerText = `items ${i}`;
    li.style.listStyleType = document.create_list.Type_of_marks.value;
}


document.querySelector('#cret_list_btn').addEventListener('click', function () {
    document.querySelector('.two').classList.add('hide');
    document.querySelector('.one').style.display = 'block';
    // console.log(list)
    
})


document.querySelector('#save').addEventListener('click', function () {
    result_box.innerHTML = document.querySelector('.textarea').value;
    edit.classList.remove('show')
    edit.classList.add('hide');console.log(list)
    result_box.appendChild(list);
})