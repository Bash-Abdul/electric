window.addEventListener("load", () => {
    const e = document.querySelector(".loader__container");
    e.classList.add("loader__container-hidden"),
      e.addEventListener("transitionend", () => {
        document.body.removeChild("loader__container");
      });
  });

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

var swiper = new Swiper( '.main_slider', {
    type: 'loop',
//   drag: 'free',
  snap: true,
  autoplay: true,
  pagination: false,
  effect:'fade',
  autoplay: {
    delay:5000,
  }
} );
