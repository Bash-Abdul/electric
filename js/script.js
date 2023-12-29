let menu = document.querySelector('.nav__menu img');
let nav = document.querySelector('.nav__list');


menu.addEventListener('click', ()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('bx-x');
})

let headerTop = document.querySelector('.header__top');

window.onscroll = () =>{
    if (window.scrollY > 100){
        headerTop.classList.add('active');
    }else{
        headerTop.classList.remove('active');
    }
}