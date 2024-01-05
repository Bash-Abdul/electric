window.addEventListener("load", () => {
    const e = document.querySelector(".loader__container");
    e.classList.add("loader__container-hidden"),
      e.addEventListener("transitionend", () => {
        document.body.removeChild("loader__container");
      });
  });

  const pathName = window.location.pathname,
  pageName = pathName.split("/").pop();
"index.html" === pageName &&
  document.querySelector(".home__link").classList.add("active"),
  "about.html" === pageName &&
    document.querySelector(".about__link").classList.add("active"),
  "service.html" === pageName &&
    document.querySelector(".services__link").classList.add("active"),
  "join.html" === pageName &&
    document.querySelector(".blog__link").classList.add("active"),
  "contact.html" === pageName &&
    document.querySelector(".contact__link").classList.add("active")


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
        headerTop.style.transition = "all .2s linear";
        nav.classList.remove(nav);
    }else{
        headerTop.classList.remove('active');
    }
}




let valueDisplays = document.querySelectorAll('.num');
let interval = 500;

valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    }, duration)
})

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
