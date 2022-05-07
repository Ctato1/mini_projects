const imgs = document.querySelectorAll('.img');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const img4 = document.querySelector('.img4');
const img5 = document.querySelector('.img5');

function remove(){
    imgs.forEach((img)=>{
        img.classList.remove('active')
    })
}

console.log(imgs);

img1.addEventListener('click',()=>{
    remove()
    img1.classList.add('active')
})

img2.addEventListener('click',()=>{
    remove()
    img2.classList.add('active')
})

img3.addEventListener('click',()=>{
    remove()
    img3.classList.add('active')
})

img4.addEventListener('click',()=>{
    remove()
    img4.classList.add('active')
})

img5.addEventListener('click',()=>{
    remove()
    img5.classList.add('active')
})
