// Scroll Controls
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () {};
}


// Connect
const items = document.querySelector('.items')
const media = document.querySelector('.media')
const barI = document.getElementById('bar')
const closeI = document.getElementById('close')
const main = document.querySelector('main')


barI.style.display = 'block'
barI.style.transform = 'translateX(-800px)'
// Check item side
let flag = true
closeI.style.transition = '1s'
barI.style.transition = '1s'
items.addEventListener('click', () => {
    if (flag) {
        enableScroll()
        barI.style.opacity = '1'
        barI.style.transform = 'translateX(0px)'
        closeI.style.opacity = '.1'
        closeI.style.transform = 'translateX(-800px)';
        // closeI.style.display = 'none';
        flag = false
    } else {
        disableScroll()
        closeI.style.opacity = '1'
        closeI.style.transform = 'translateX(0px)'
        barI.style.transform = 'translateX(-800px)'
        barI.style.opacity = '.1'
        // barI.style.display = 'none';
        // closeI.style.display = 'block';
        flag = true
    }
})

// css classes
let closeTab = closeI.addEventListener('click', closeBar)
let openTab = barI.addEventListener('click', openBar)

media.style.right = '-1px'
media.style.transition = '.4s'

function closeBar() {

    media.style.right = '-1px'
    media.style.transform = 'translateX(100%)'
    media.style.zIndex = '0'

}

function openBar() {
    media.style.transform = 'translateX(0px)'
}





















// document.querySelector('body').addEventListener('wheel', preventScroll, {passive: false});

// function preventScroll(e){
//     e.preventDefault();
//     e.stopPropagation();

//     return false;
// }