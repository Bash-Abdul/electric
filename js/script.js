window.addEventListener("load", () => {
  let e = document.querySelector(".loader__container");
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
    document.querySelector(".contact__link").classList.add("active");
let menu = document.querySelector(".nav__menu img"),
  nav = document.querySelector(".nav__list");
menu.addEventListener("click", () => {
  nav.classList.toggle("active"), 
  menu.classList.toggle("bx-x");
});
let headerTop = document.querySelector(".header__top");
window.onscroll = () => {
  window.scrollY > 100
    ? (headerTop.classList.add("active"),
      (headerTop.style.transition = "all .2s linear"),
      nav.classList.remove(nav))
    : headerTop.classList.remove("active");
};
let arrow = document.querySelector(".arrow"),
  whatsapp = document.querySelector("#whatsapp");
function toTop() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", () => {
  window.pageYOffset > 100
    ? (arrow.classList.add("active"), whatsapp.classList.add("active"))
    : (arrow.classList.remove("active"), whatsapp.classList.remove("active"));
}),
  arrow.addEventListener("click", toTop);
let valueDisplays = document.querySelectorAll(".num"),
  interval = 500;
valueDisplays.forEach((e) => {
  let a = 0,
    t = parseInt(e.getAttribute("data-val")),
    l = setInterval(function () {
      (a += 1), (e.textContent = a), a == t && clearInterval(l);
    }, Math.floor(interval / t));
});
var swiper = new Swiper(".mySwiper", {
  loop: !0,
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
