let getId = id => document.getElementById(id);

let getSel = sell => document.querySelector(sell);

let boxColors = document.box_colors;
let imgBg = document.bth_colors.color_text;
let colorBg = document.bth_colors.background_colors;


function bgBoxColors() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.backgroundColor = document.box_colors.elements[i].value;

    }
}

function bgImg() {
    for (let i = 0; i < document.box_colors.children.length; i++) {

        document.box_colors.children[i].style.background = `url(${arrImg[i]})`;

    }
}


colorBg.addEventListener('click', function () {

    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].style.background = ``;
            bgBoxColors()
            document.box_colors.children[i].onclick = function () {
                document.body.style.background = ''
                document.body.style.backgroundColor = document.box_colors.elements[i].value;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }
    }

})

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
imgBg.addEventListener('click', function () {
    bgImg()
    if (boxColors.className == 'wrap_colors_choose hide') {
        boxColors.classList.remove('hide')
        boxColors.classList.add('show')

        for (let i = 0; i < document.box_colors.elements.length; i++) {
            document.box_colors.children[i].onclick = function () {
                document.body.style.background = `url(${arrImg[i]})`;
                boxColors.classList.remove('show')
                boxColors.classList.add('hide')
            }
        }
    }

})
