  AOS.init();


const menuBt = document.querySelector('.hamburger')
const topBar = document.querySelector('.bar.top')
const middleBar = document.querySelector('.bar.middle')
const bottomBar = document.querySelector('.bar.bottom')
const menuWindow = document.querySelector('.menu_panel')
const slidePart = document.querySelector('.intro_img')
const singleTile = document.querySelectorAll('.single_tile')

singleTile.forEach((tile) => {
    tile.onmousedown = () => {
        tile.classList.toggle('tileBlur')
    }
})


function animateMenu() {
    menuWindow.classList.toggle('menu_animate')
    slidePart.classList.toggle('intro_animate')
}

menuBt.onclick = () => {
    topBar.classList.toggle('top_animate')
    middleBar.classList.toggle('middle_animate')
    bottomBar.classList.toggle('bottom_animate')
    animateMenu();

}


