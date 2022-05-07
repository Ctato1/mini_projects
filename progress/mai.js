const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')
const line4 = document.querySelector('.line4')



const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')

// fourth.addEventListener('click', () => {
//     line1.value = 1
//     line2.value = 1
//     if(prevBtn)
    
//     second.classList.add('active')
//     fourth.classList.add('active')
//     third.classList.add('active')
    
//     img1.classList.remove('current')
//     img2.classList.remove('current')
//     img3.classList.remove('current')

//     img4.classList.add('current')
//     line3.value = 1
//     img4.style.transform = 'translateX(400px)'
// })
// third.addEventListener('click', () => {
//     line1.value = 1
//     line3.value = 0
//     fourth.classList.remove('active')
//     second.classList.add('active')
    
//     third.classList.add('active')
    
//     img1.classList.remove('current')
//     img2.classList.remove('current')
//     img4.classList.remove('current')


//     img3.classList.add('current')
//     line2.value = 1
//     img3.style.transform = 'translateX(270px)'
// })

// second.addEventListener('click', () => {
//     line1.value = 1
//     line3.value = 0
//     line2.value = 0
//     fourth.classList.remove('active')
//     third.classList.remove('active')

    
//     second.classList.add('active')
    
//     img1.classList.remove('current')
//     img3.classList.remove('current')
//     img4.classList.remove('current')


//     img2.classList.add('current')
//     line1.value = 1
//     img2.style.transform = 'translateX(140px)'
// })




nextBtn.addEventListener('click', moveOn);
prevBtn.addEventListener('click', moveOff);

const img = document.querySelector('.img')

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const img4 = document.querySelector('.img4')



function moveOn() {

    if (line1.value == 0) {
        prevBtn.style.pointerEvents = 'painted'
        second.classList.remove('active')
        line1.value = 1
        second.classList.add('active')

        prevBtn.classList.add('active')
        // imgs
        img1.classList.remove('current')
        img2.classList.add('current')

        img2.style.transform = 'translateX(140px)'

    } else if (line2.value == 0) {
        third.classList.remove('active')
        line2.value = 1
        third.classList.add('active')


        img2.classList.remove('current')
        img3.classList.add('current')

        img3.style.transform = 'translateX(270px)'
        // imgs

    } else if (line3.value == 0) {
        fourth.classList.remove('active')
        line3.value = 1
        fourth.classList.add('active')
        nextBtn.classList.remove('active')
        // imgs
        img3.classList.remove('current')
        img4.classList.add('current')

        img4.style.transform = 'translateX(400px)'
        nextBtn.style.pointerEvents = 'none'

    }


}


function moveOff() {
    if (line3.value == 1) {
        nextBtn.style.pointerEvents = 'painted'
        fourth.classList.remove('active')
        nextBtn.classList.add('active')
        line3.value = 0
        //imgs
        img4.classList.remove('current')
        img3.classList.add('current')


    } else if (line2.value == 1) {
        third.classList.remove('active')
        line2.value = 0
        //imgs
        img3.classList.remove('current')
        img2.classList.add('current')


    } else if (line1.value == 1) {
        line1.value = 0
        second.classList.remove('active')
        //imgs 
        img2.classList.remove('current')
        img1.classList.add('current')
        prevBtn.classList.remove('active')
        prevBtn.style.pointerEvents = 'none'

    }



}

// =